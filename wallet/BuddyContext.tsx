import { Client } from "./Connection";
import * as anchor from "@project-serum/anchor";
import {
  ASSOCIATED_TOKEN_PROGRAM_ID,
  Token,
  TOKEN_PROGRAM_ID,
} from "@solana/spl-token";
import { PublicKey, Transaction } from "@solana/web3.js";
import { Address } from "@project-serum/anchor";

// Replace to your spl mint address if you need to
//Remove if only need SOL
export const LADAMint = new PublicKey(
  "95bzgMCtKw2dwaWufV9iZyu64DQo1eqw6QWnFMUSnsuF"
);
export const ORGANIZATION = "laddercaster";

export class BuddyContext {
  constructor(private client: Client) {}

  async getSOLBalanceToClaim(org: string, name: string) {
    const fetchedMasterOrg = (
      await this.client.program.account.masterOrganization.all()
    )[0];
    const [buddyPDA] = await anchor.web3.PublicKey.findProgramAddress(
      [Buffer.from(org), Buffer.from(name)],
      this.client.program.programId
    );
    const [buddySolChestPDA] = await anchor.web3.PublicKey.findProgramAddress(
      [Buffer.from(org), Buffer.from(name), Buffer.from("solana_mint")],
      this.client.program.programId
    );

    const fetchedBuddy = await this.client.program.account.buddy.fetch(
      buddyPDA
    );

    const masterOrgBPS = fetchedMasterOrg.account.shareKeptInBps as number;
    const referrerBPS = (
      await this.client.program.account.buddy.fetch(
        fetchedBuddy.referrer as Address
      )
    ).shareKeptInBps as number;

    const solChestAccountInfo = (await this.client.connection.getAccountInfo(
      buddySolChestPDA
    ))!;

    const amountMinusRent =
      solChestAccountInfo.lamports -
      (await this.client.connection.getMinimumBalanceForRentExemption(
        solChestAccountInfo.data.length
      ));

    return (
      (amountMinusRent -
        Math.floor((amountMinusRent * masterOrgBPS) / 10_000) -
        Math.floor((amountMinusRent * referrerBPS) / 10_000)) /
      1e9
    );
  }

  async getReferrer(org: string, name: string) {
    const [referrerPDA] = await anchor.web3.PublicKey.findProgramAddress(
      [Buffer.from(org), Buffer.from(name)],
      this.client.program.programId
    );

    return await this.client.program.account.buddy.fetch(referrerPDA);
  }

  async getBuddy(org: string) {
    const buddies = await this.client.program.account.buddy.all([
      {
        memcmp: {
          offset: 8,
          bytes: this.client.wallet?.publicKey?.toBase58()!,
        },
      },
    ]);

    return buddies.find((bud) => bud.account.organization === org);
  }

  async getSOLChest(name) {
    const [buddyChestSOl] = await anchor.web3.PublicKey.findProgramAddress(
      [
        Buffer.from(ORGANIZATION),
        Buffer.from(name),
        Buffer.from("solana_mint"),
      ],
      this.client.program.programId
    );

    return await this.client.program.account.treasuryChest.fetch(buddyChestSOl);
  }

  async getMintChest(name: string, org: string, mint: PublicKey) {
    const [buddyChestPDA] = await anchor.web3.PublicKey.findProgramAddress(
      [Buffer.from(org), Buffer.from(name), mint.toBuffer()],
      this.client.program.programId
    );

    console.log(
      (
        await this.client.program.account.treasuryChest.fetch(buddyChestPDA)
      ).mint.toString()
    );
    return await this.client.program.account.treasuryChest.fetch(buddyChestPDA);
  }

  async claim(org, name) {
    const [buddyPDA] = await anchor.web3.PublicKey.findProgramAddress(
      [Buffer.from(org), Buffer.from(name)],
      this.client.program.programId
    );
    const buddy = await this.client.program.account.buddy.fetch(buddyPDA);

    //Fetching referrer accounts
    const referrer = await this.client.program.account.buddy.fetch(
      buddy.referrer as Address
    );

    // Fetching master org accounts
    const masterOrg = (
      await this.client.program.account.masterOrganization.all()
    )[0];
    const [masterOrgTreasurySolChestPDA] =
      await anchor.web3.PublicKey.findProgramAddress(
        [Buffer.from("master"), Buffer.from("solana_mint")],
        this.client.program.programId
      );

    const [referrerTreasurySolChestPDA] =
      await anchor.web3.PublicKey.findProgramAddress(
        [
          Buffer.from(org),
          Buffer.from(referrer.name as string),
          Buffer.from("solana_mint"),
        ],
        this.client.program.programId
      );

    const [buddyTreasurySolChestPDA] =
      await anchor.web3.PublicKey.findProgramAddress(
        [Buffer.from(org), Buffer.from(name), Buffer.from("solana_mint")],
        this.client.program.programId
      );
    const tx = new Transaction();

    tx.add(
      await this.client.program.methods
        .claimSol()
        .accounts({
          systemProgram: anchor.web3.SystemProgram.programId,
          rent: anchor.web3.SYSVAR_RENT_PUBKEY,
          authority: this.client.wallet.publicKey,
          masterOrganization: masterOrg.publicKey,
          masterOrganizationSolChest: masterOrgTreasurySolChestPDA,
          referrer: buddy.referrer as Address,
          referrerSolChest: referrerTreasurySolChestPDA,
          buddy: buddyPDA,
          buddySolChest: buddyTreasurySolChestPDA,
          receiverAccount: this.client.wallet.publicKey,
        })
        .instruction()
    );

    tx.feePayer = this.client.wallet.publicKey;

    return await this.client.program.provider.send?.(tx);
  }

  async linkTransaction(
    org: string,
    name: string,
    shareKeptInBPS: number,
    referrer: string
  ) {
    const [organizationPDA] = await anchor.web3.PublicKey.findProgramAddress(
      [Buffer.from(org), Buffer.from("")],
      this.client.program.programId
    );

    const [organizationConfigurationPDA] =
      await anchor.web3.PublicKey.findProgramAddress(
        [Buffer.from("config"), Buffer.from(org)],
        this.client.program.programId
      );

    const [referrerPDA] = await anchor.web3.PublicKey.findProgramAddress(
      [Buffer.from(org), Buffer.from(referrer)],
      this.client.program.programId
    );

    const [buddyPDA] = await anchor.web3.PublicKey.findProgramAddress(
      [Buffer.from(org), Buffer.from(name)],
      this.client.program.programId
    );

    const [buddySolChestPDA] = await anchor.web3.PublicKey.findProgramAddress(
      [Buffer.from(org), Buffer.from(name), Buffer.from("solana_mint")],
      this.client.program.programId
    );

    let [buddyNameCheckPDA] = await anchor.web3.PublicKey.findProgramAddress(
      [Buffer.from("name_validation"), Buffer.from(org), buddyPDA.toBuffer()],
      this.client.program.programId
    );

    const tx = new Transaction();

    tx.add(
      await this.client.program.methods
        .initBuddy(name, shareKeptInBPS)
        .accounts({
          systemProgram: anchor.web3.SystemProgram.programId,
          rent: anchor.web3.SYSVAR_RENT_PUBKEY,
          authority: this.client.wallet.publicKey,
          organization: organizationPDA,
          organizationConfiguration: organizationConfigurationPDA,
          referrer: referrerPDA,
          buddy: buddyPDA,
          buddySolChest: buddySolChestPDA,
        })
        .remainingAccounts([
          {
            pubkey: buddyNameCheckPDA,
            isWritable: true,
            isSigner: false,
          },
        ])
        .instruction()
    );

    const orgAccount = await this.client.program.account.buddy.fetch(
      organizationPDA
    );

    if (orgAccount.hasRequiredMint) {
      const [buddyChestPDA] = await anchor.web3.PublicKey.findProgramAddress(
        [Buffer.from(org), Buffer.from(name), LADAMint.toBuffer()],
        this.client.program.programId
      );
      let buddyTokenAccount = await Token.getAssociatedTokenAddress(
        ASSOCIATED_TOKEN_PROGRAM_ID,
        TOKEN_PROGRAM_ID,
        LADAMint,
        buddyChestPDA,
        true
      );

      tx.add(
        await this.client.program.methods
          .initChest()
          .accounts({
            associatedTokenProgram: ASSOCIATED_TOKEN_PROGRAM_ID,
            tokenProgram: TOKEN_PROGRAM_ID,
            systemProgram: anchor.web3.SystemProgram.programId,
            rent: anchor.web3.SYSVAR_RENT_PUBKEY,
            authority: this.client.wallet.publicKey,
            mint: LADAMint,
            organization: organizationPDA,
            organizationConfiguration: organizationConfigurationPDA,
            buddy: buddyPDA,
            buddyChest: buddyChestPDA,
            buddyTokenAccount: buddyTokenAccount,
          })
          .instruction()
      );
    }

    tx.feePayer = this.client.wallet.publicKey;
    tx.recentBlockhash = (
      await this.client.connection.getRecentBlockhash()
    ).blockhash;

    return await this.client.program.provider.send?.(tx);
  }

  async createChest(org: string, name: string) {
    const [organizationPDA] = await anchor.web3.PublicKey.findProgramAddress(
      [Buffer.from(org), Buffer.from("")],
      this.client.program.programId
    );

    const [organizationConfigurationPDA] =
      await anchor.web3.PublicKey.findProgramAddress(
        [Buffer.from("config"), Buffer.from(org)],
        this.client.program.programId
      );

    const [buddyPDA] = await anchor.web3.PublicKey.findProgramAddress(
      [Buffer.from(org), Buffer.from(name)],
      this.client.program.programId
    );

    const tx = new Transaction();

    const orgAccount = await this.client.program.account.buddy.fetch(
      organizationPDA
    );

    if (orgAccount.hasRequiredMint) {
      const [buddyChestPDA] = await anchor.web3.PublicKey.findProgramAddress(
        [Buffer.from(org), Buffer.from(name), LADAMint.toBuffer()],
        this.client.program.programId
      );
      let buddyTokenAccount = await Token.getAssociatedTokenAddress(
        ASSOCIATED_TOKEN_PROGRAM_ID,
        TOKEN_PROGRAM_ID,
        LADAMint,
        buddyChestPDA,
        true
      );

      tx.add(
        await this.client.program.methods
          .initChest()
          .accounts({
            associatedTokenProgram: ASSOCIATED_TOKEN_PROGRAM_ID,
            tokenProgram: TOKEN_PROGRAM_ID,
            systemProgram: anchor.web3.SystemProgram.programId,
            rent: anchor.web3.SYSVAR_RENT_PUBKEY,
            authority: this.client.wallet.publicKey,
            mint: LADAMint,
            organization: organizationPDA,
            organizationConfiguration: organizationConfigurationPDA,
            buddy: buddyPDA,
            buddyChest: buddyChestPDA,
            buddyTokenAccount: buddyTokenAccount,
          })
          .instruction()
      );
    }

    tx.feePayer = this.client.wallet.publicKey;
    tx.recentBlockhash = (
      await this.client.connection.getRecentBlockhash()
    ).blockhash;

    return await this.client.program.provider.send?.(tx);
  }
}
