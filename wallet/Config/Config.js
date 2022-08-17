import stakingIDL from "./staking.json";
export const environment = process.env.REACT_APP_ENV || "devnet";
export const isProd = environment === "mainnet";

const config = {
  ["mainnet"]: {
    idl: stakingIDL,
    rpc: "https://autumn-quiet-grass.solana-mainnet.quiknode.pro/e740cf15bc2f5d51519cdda04ccd585ddcab4f68/",
  },
  ["mainnet-priv"]: {
    idl: stakingIDL,
    rpc: "https://autumn-quiet-grass.solana-mainnet.quiknode.pro/e740cf15bc2f5d51519cdda04ccd585ddcab4f68/",
  },
  ["localprod"]: {
    idl: stakingIDL,
    rpc: "https://wandering-divine-dream.solana-mainnet.quiknode.pro/51a28202db85ffa02345f9ba72ad73394732af13/",
  },
  ["local"]: {
    idl: stakingIDL,
    rpc: "http://localhost:8899",
  },
  ["devnet"]: {
    idl: stakingIDL,
    rpc: "https://lively-still-wildflower.solana-devnet.quiknode.pro/7fd1afc95f8690531aa30719251004144802df33/",
  },
};

export default config[environment];
