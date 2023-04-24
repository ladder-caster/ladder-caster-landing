import stakingIDL from "./staking.json";
export const environment = process.env.ENVIRONMENT || "mainnet";
export const isProd = environment === "mainnet";

const config = {
  ["mainnet"]: {
    stakingIdl: stakingIDL,
    rpc: "https://autumn-quiet-grass.solana-mainnet.quiknode.pro/e740cf15bc2f5d51519cdda04ccd585ddcab4f68/",
  },
  ["mainnet-priv"]: {
    stakingIdl: stakingIDL,
    rpc: "https://autumn-quiet-grass.solana-mainnet.quiknode.pro/e740cf15bc2f5d51519cdda04ccd585ddcab4f68/",
  },
  ["localprod"]: {
    stakingIdl: stakingIDL,
    rpc: "https://wandering-divine-dream.solana-mainnet.quiknode.pro/e4ff6afb31ec8f31d05d2f2c4231ea6c3b4f3af4/",
  },
  ["local"]: {
    stakingIdl: stakingIDL,
    rpc: "http://localhost:8899",
  },
  ["devnet"]: {
    stakingIdl: stakingIDL,
    rpc: "https://lively-still-wildflower.solana-devnet.quiknode.pro/7fd1afc95f8690531aa30719251004144802df33/",
  },
};

export default config[environment];
