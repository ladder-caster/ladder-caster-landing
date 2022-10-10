import * as anchor from "@project-serum/anchor";
import { Connection } from "@solana/web3.js";
import NodeWallet from "./NodeWallet";
import config, { environment } from "./Config/Config";

export type Environment =
  | "mainnet"
  | "mainnet-priv"
  | "localnet"
  | "devnet"
  | "localprod";

export class Client {
  constructor(
    public program: anchor.Program,
    public connection: Connection,
    public wallet: NodeWallet
  ) {}

  static async connect(
    wallet?: NodeWallet,
    programName = "staking"
  ): Promise<Client> {
    const conn = await Client.getConnection();

    const program = Client.getProgram(conn, programName, wallet);

    return new Client(program, conn, wallet!);
  }

  static async getConnection(): Promise<anchor.web3.Connection> {
    if (config) return new anchor.web3.Connection(config.rpc);
    return new anchor.web3.Connection(config.rpc);
  }

  private static getProgram(
    conn: anchor.web3.Connection,
    programName: string,
    wallet?: NodeWallet
  ) {
    const _provider = new anchor.Provider(conn, wallet!, {});

    let idl = config.stakingIdl;
    if (programName !== "staking") idl = config.buddyIdl;
    return new anchor.Program(
      idl as anchor.Idl,
      idl.metadata.address,
      _provider
    );
  }
}
