import { findProgramAddressSync } from "@project-serum/anchor/dist/cjs/utils/pubkey";
import {
  Keypair,
  PublicKey,
  SYSVAR_RENT_PUBKEY,
  Transaction,
} from "@solana/web3.js";
import { Client } from "./Connection";
import * as anchor from "@project-serum/anchor";
import {
  ASSOCIATED_TOKEN_PROGRAM_ID,
  Token,
  TOKEN_PROGRAM_ID,
} from "@solana/spl-token";
import Keys from "./Config/keys.json";

export class StakingContext {
  constructor(private client: Client) {}

  async getClock() {
    return await this.client.connection.getBlockTime(
      await this.client.connection.getSlot()
    );
  }

  async getStakingContracts() {
    const stakingAccounts =
      await this.client.program.account.stakingContract.all();

    return stakingAccounts.map((acc) => ({
      ...acc.account,
      publicKey: acc.publicKey,
    }));
  }

  async getUserStaked() {
    const stakingAccounts = await this.client.program.account.ladaStakeInfo.all(
      [
        {
          memcmp: {
            offset: 8,
            bytes: this.client.wallet.publicKey.toBase58(),
          },
        },
      ]
    );

    return stakingAccounts.map((acc) => ({
      ...acc.account,
      publicKey: acc.publicKey,
    }));
  }

  async stakeLADA(amount: number, tier: number) {
    const [stakingSigner] = findProgramAddressSync(
      [Buffer.from("staking_signer")],
      this.client.program.programId
    );
    const stakeInfo = Keypair.generate();

    return await this.client.program.rpc.stakeLada(new anchor.BN(amount), {
      accounts: {
        tokenProgram: TOKEN_PROGRAM_ID,
        systemProgram: anchor.web3.SystemProgram.programId,
        associatedTokenProgram: ASSOCIATED_TOKEN_PROGRAM_ID,
        rent: SYSVAR_RENT_PUBKEY,
        authority: this.client.wallet.publicKey,
        stakingSigner: stakingSigner,
        ladaPool: new PublicKey(Keys.ladaPool),
        userLadaToken: new PublicKey(Keys.userTokenAccount),
        stakeInfo: stakeInfo.publicKey,
        stakingContract: StakingContext.getTier(tier)!,
      },
      signers: [stakeInfo],
    });
  }

  async unstakeLADA(userStakeAccount: any) {
    const [stakingSigner] = await anchor.web3.PublicKey.findProgramAddress(
      [Buffer.from("staking_signer")],
      this.client.program.programId
    );

    return await this.client.program.rpc.unstakeLada({
      accounts: {
        tokenProgram: TOKEN_PROGRAM_ID,
        systemProgram: anchor.web3.SystemProgram.programId,
        associatedTokenProgram: ASSOCIATED_TOKEN_PROGRAM_ID,
        authority: this.client.wallet.publicKey,
        stakingSigner: stakingSigner,
        ladaTokenAccount: new PublicKey(Keys.ladaPoolInterest),
        ladaPool: new PublicKey(Keys.ladaPool),
        userLadaToken: new PublicKey(Keys.userTokenAccount),
        stakeInfo: userStakeAccount.publicKey,
        stakingContract: userStakeAccount.stakingContract,
      },
      signers: [],
    });
  }

  claim(userStakeAccount: any, stakingSigner: PublicKey, blockhash: string) {
    const tx = new Transaction();

    tx.add(
      this.client.program.instruction.claimInterests({
        accounts: {
          tokenProgram: TOKEN_PROGRAM_ID,
          systemProgram: anchor.web3.SystemProgram.programId,
          associatedTokenProgram: ASSOCIATED_TOKEN_PROGRAM_ID,
          authority: this.client.wallet.publicKey,
          stakingSigner: stakingSigner,
          ladaTokenAccount: new PublicKey(Keys.ladaPoolInterest),
          userLadaToken: new PublicKey(Keys.userTokenAccount),
          stakeInfo: userStakeAccount.publicKey,
          stakingContract: userStakeAccount.stakingContract,
        },
        signers: [],
      })
    );

    tx.recentBlockhash = blockhash;
    tx.feePayer = this.client.wallet.publicKey!;

    return tx;
  }

  async bulkClaim(accounts: any[]) {
    const [stakingSigner] = await anchor.web3.PublicKey.findProgramAddress(
      [Buffer.from("staking_signer")],
      this.client.program.programId
    );
    const blockhash = (await this.client.connection.getLatestBlockhash())
      .blockhash;
    const transactions: Transaction[] = [];

    accounts.forEach((acc) => {
      transactions.push(this.claim(acc, stakingSigner, blockhash));
    });

    const signedTxns =
      await this.client.program.provider.wallet.signAllTransactions(
        transactions
      );

    const txPromises: any[] = [];

    signedTxns.forEach((tx) => {
      const promise = async () => {
        return await this.client.connection.confirmTransaction(
          await this.client.connection.sendRawTransaction(tx.serialize())
        );
      };

      txPromises.push(promise());
    });

    return await Promise.all(txPromises);
  }

  async getUserLadaBalance() {
    let balance: anchor.web3.TokenAmount;
    try {
      balance = (
        await this.client.connection.getTokenAccountBalance(
          new PublicKey(Keys.userTokenAccount)
        )
      ).value;
    } catch (e) {
      const userLadaTokenAccount = await Token.getAssociatedTokenAddress(
        ASSOCIATED_TOKEN_PROGRAM_ID,
        TOKEN_PROGRAM_ID,
        new PublicKey(Keys.ladaTokenAccount),
        this.client.wallet.publicKey
      );
      balance = (
        await this.client.connection.getTokenAccountBalance(
          userLadaTokenAccount
        )
      ).value;
    }

    return balance.uiAmount;
  }

  static getTier(tier: number) {
    switch (+tier) {
      case 1: {
        return new PublicKey(Keys.contract1);
      }
      case 2: {
        return new PublicKey(Keys.contract2);
      }
      case 3: {
        return new PublicKey(Keys.contract3);
      }
      default:
        return null;
    }
  }
}
