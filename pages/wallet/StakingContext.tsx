import { findProgramAddressSync } from "@project-serum/anchor/dist/cjs/utils/pubkey";
import { Keypair, PublicKey, SYSVAR_RENT_PUBKEY } from "@solana/web3.js";
import { Client } from "./Connection";
import * as anchor from "@project-serum/anchor";
import {
  ASSOCIATED_TOKEN_PROGRAM_ID,
  TOKEN_PROGRAM_ID,
} from "@solana/spl-token";
import Keys from "./Config/keys.json";

export class StakingContext {
  constructor(private client: Client) {}

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

  async claim(userStakeAccount: any) {
    const [stakingSigner] = await anchor.web3.PublicKey.findProgramAddress(
      [Buffer.from("staking_signer")],
      this.client.program.programId
    );

    return await this.client.program.rpc.claimInterests({
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
    });
  }

  async getUserLadaBalance() {
    // const userLadaTokenAccount = await Token.getAssociatedTokenAddress(
    //   ASSOCIATED_TOKEN_PROGRAM_ID,
    //   TOKEN_PROGRAM_ID,
    //   LADA_ACCOUNT,
    //   this.client.wallet.publicKey
    // );

    return await this.client.connection.getTokenAccountBalance(
      new PublicKey(Keys.userTokenAccount)
    );
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
