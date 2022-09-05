import stakingIDL from "./staking.json";
export const environment = process.env.REACT_APP_ENV || "mainnet";
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
    rpc: "https://wandering-divine-dream.solana-mainnet.quiknode.pro/e4ff6afb31ec8f31d05d2f2c4231ea6c3b4f3af4/",
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
