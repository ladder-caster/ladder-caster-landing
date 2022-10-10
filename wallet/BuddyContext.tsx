import { Client } from "./Connection";
import * as anchor from "@project-serum/anchor";
import {
  ASSOCIATED_TOKEN_PROGRAM_ID,
  Token,
  TOKEN_PROGRAM_ID,
} from "@solana/spl-token";
import { PublicKey, Transaction } from "@solana/web3.js";

const LADAMint = new PublicKey("95bzgMCtKw2dwaWufV9iZyu64DQo1eqw6QWnFMUSnsuF");

export class BuddyContext {
  constructor(private client: Client) {}

  async getReferrer(org: string, name: string) {
    console.log("CLIENT", this.client);
    const [referrerPDA] = await anchor.web3.PublicKey.findProgramAddress(
      [Buffer.from(org), Buffer.from(name)],
      this.client.program.programId
    );

    return await this.client.program.account.buddy.fetch(referrerPDA);
  }

  async linkTransaction(
    org: string,
    name: string,
    shareKeptInBPS: number,
    referrer: string
  ) {
    const allOrgs = await this.client.program.account.buddy.all();
    const allMasters =
      await this.client.program.account.masterOrganization.all();
    console.log(allOrgs, allMasters, org, name, shareKeptInBPS, referrer);

    const [organizationPDA] = await anchor.web3.PublicKey.findProgramAddress(
      [Buffer.from(org), Buffer.from("")],
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

    const tx = new Transaction();

    tx.add(
      await this.client.program.methods
        .initBuddy(name, shareKeptInBPS)
        .accounts({
          systemProgram: anchor.web3.SystemProgram.programId,
          rent: anchor.web3.SYSVAR_RENT_PUBKEY,
          authority: this.client.program.provider.wallet.publicKey,
          organization: organizationPDA,
          referrer: referrerPDA,
          buddy: buddyPDA,
        })
        .instruction()
    );

    const orgAccount = await this.client.program.account.buddy.fetch(
      organizationPDA
    );

    if (orgAccount.requiredMint) {
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
            authority: this.client.program.provider.wallet.publicKey,
            mint: LADAMint,
            organization: organizationPDA,
            buddy: buddyPDA,
            buddyChest: buddyChestPDA,
            buddyTokenAccount: buddyTokenAccount,
          })
          .instruction()
      );
    }

    tx.feePayer = this.client.program.provider.wallet.publicKey;

    await this.client.program.provider.send(tx);
  }
}
