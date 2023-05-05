import stakingIDL from "./wallet/Config/staking.json";

const config = {
  stakingIdl: stakingIDL,
  rpc: process.env.NEXT_PUBLIC_RPC,
  programId: process.env.NEXT_PUBLIC_PROGRAMID,
};

export default config;
