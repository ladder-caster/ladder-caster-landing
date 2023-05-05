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

  async stakeLADA(amount: number, tier: number) {
    const [stakingSigner] = findProgramAddressSync(
      [Buffer.from("staking_signer")],
      this.client.program.programId
    );
    const stakeInfo = Keypair.generate();

    const userLadaTokenAccount = await Token.getAssociatedTokenAddress(
      ASSOCIATED_TOKEN_PROGRAM_ID,
      TOKEN_PROGRAM_ID,
      new PublicKey(Keys.mintAccount),
      this.client.wallet.publicKey
    );

    const tx = new Transaction();

    tx.add(
      await this.client.program.methods
        .stakeLada(new anchor.BN(amount))
        .accounts({
          tokenProgram: TOKEN_PROGRAM_ID,
          systemProgram: anchor.web3.SystemProgram.programId,
          associatedTokenProgram: ASSOCIATED_TOKEN_PROGRAM_ID,
          rent: SYSVAR_RENT_PUBKEY,
          authority: this.client.wallet.publicKey,
          stakingSigner: stakingSigner,
          ladaPool: new PublicKey(Keys.ladaPool),
          userLadaToken: userLadaTokenAccount,
          stakeInfo: stakeInfo.publicKey,
          stakingContract: StakingContext.getTier(tier)!,
        })
        .instruction()
    );

    tx.feePayer = this.client.wallet.publicKey;

    const { blockhash, lastValidBlockHeight } =
      await this.client.connection.getLatestBlockhash();
    tx.recentBlockhash = blockhash;
    tx.lastValidBlockHeight = lastValidBlockHeight;

    tx.partialSign(stakeInfo);

    return tx;
  }

  async unstakeLADA(userStakeAccount: any) {
    const [stakingSigner] = await anchor.web3.PublicKey.findProgramAddress(
      [Buffer.from("staking_signer")],
      this.client.program.programId
    );
    const userLadaTokenAccount = await Token.getAssociatedTokenAddress(
      ASSOCIATED_TOKEN_PROGRAM_ID,
      TOKEN_PROGRAM_ID,
      new PublicKey(Keys.mintAccount),
      this.client.wallet.publicKey
    );

    const tx = new Transaction();

    tx.add(
      await this.client.program.methods
        .unstakeLada()
        .accounts({
          tokenProgram: TOKEN_PROGRAM_ID,
          systemProgram: anchor.web3.SystemProgram.programId,
          associatedTokenProgram: ASSOCIATED_TOKEN_PROGRAM_ID,
          authority: this.client.wallet.publicKey,
          stakingSigner: stakingSigner,
          ladaTokenAccount: new PublicKey(Keys.ladaPoolInterest),
          ladaPool: new PublicKey(Keys.ladaPool),
          userLadaToken: userLadaTokenAccount,
          stakeInfo: userStakeAccount.publicKey,
          stakingContract: userStakeAccount.stakingContract,
        })
        .instruction()
    );

    tx.feePayer = this.client.wallet.publicKey;
    const { blockhash, lastValidBlockHeight } =
      await this.client.connection.getLatestBlockhash();
    tx.recentBlockhash = blockhash;
    tx.lastValidBlockHeight = lastValidBlockHeight;

    return tx;
  }

  async claim(
    userStakeAccount: any,
    stakingSigner: PublicKey,
    blockhash: string,
    lastValidBlockHeight: number,
    userLadaTokenAccount: PublicKey
  ) {
    const tx = new Transaction();

    tx.add(
      await this.client.program.methods
        .claimInterests()
        .accounts({
          tokenProgram: TOKEN_PROGRAM_ID,
          systemProgram: anchor.web3.SystemProgram.programId,
          associatedTokenProgram: ASSOCIATED_TOKEN_PROGRAM_ID,
          authority: this.client.wallet.publicKey,
          stakingSigner: stakingSigner,
          ladaTokenAccount: new PublicKey(Keys.ladaPoolInterest),
          userLadaToken: userLadaTokenAccount,
          stakeInfo: userStakeAccount.publicKey,
          stakingContract: userStakeAccount.stakingContract,
        })
        .instruction()
    );

    tx.recentBlockhash = blockhash;
    tx.lastValidBlockHeight = lastValidBlockHeight;
    tx.feePayer = this.client.wallet.publicKey!;

    return tx;
  }

  async bulkClaim(accounts: any[]) {
    const [stakingSigner] = await anchor.web3.PublicKey.findProgramAddress(
      [Buffer.from("staking_signer")],
      this.client.program.programId
    );

    const { blockhash, lastValidBlockHeight } =
      await this.client.connection.getLatestBlockhash();
    const userLadaTokenAccount = await Token.getAssociatedTokenAddress(
      ASSOCIATED_TOKEN_PROGRAM_ID,
      TOKEN_PROGRAM_ID,
      new PublicKey(Keys.mintAccount),
      this.client.wallet.publicKey
    );
    const transactions: Transaction[] = [];

    for (const acc of accounts) {
      transactions.push(
        await this.claim(
          acc,
          stakingSigner,
          blockhash,
          lastValidBlockHeight,
          userLadaTokenAccount
        )
      );
    }

    const txPromises: any[] = [];
    const signedTxns =
      await this.client.program.provider.wallet.signAllTransactions(
        transactions
      );

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

  async getUserLadaBalance() {
    let balance: anchor.web3.TokenAmount;
    const userLadaTokenAccount = await Token.getAssociatedTokenAddress(
      ASSOCIATED_TOKEN_PROGRAM_ID,
      TOKEN_PROGRAM_ID,
      new PublicKey(Keys.mintAccount),
      this.client.wallet.publicKey
    );
    try {
      balance = (
        await this.client.connection.getTokenAccountBalance(
          userLadaTokenAccount
        )
      ).value;
    } catch (e) {
      balance = { amount: "0", uiAmount: 0, decimals: 0 };
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
      case 4: {
        return new PublicKey(Keys.oldContract1);
      }
      case 5: {
        return new PublicKey(Keys.oldContract2);
      }
      case 6: {
        return new PublicKey(Keys.oldContract3);
      }
      default:
        return null;
    }
  }

  static getContract(contractId: string) {
    switch (contractId) {
      case Keys.contract1:
        return 1;
      case Keys.contract2:
        return 2;
      case Keys.contract3:
        return 3;
      case Keys.oldContract1:
        return 4;
      case Keys.oldContract2:
        return 5;
      case Keys.oldContract3:
        return 6;
      default:
        return 0;
    }
  }
}
