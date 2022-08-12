import { PublicKey, Transaction } from "@solana/web3.js";
import create from "zustand";
import {
  ASSOCIATED_TOKEN_PROGRAM_ID,
  Token,
  TOKEN_PROGRAM_ID,
} from "@solana/spl-token";
import { StakingContext } from "../pages/wallet/StakingContext";

export const useWalletStore = create((set) => ({
  client: null,
  globalStakedLada: 0,
  globalRewardsGiven: 0,
  ladaBalance: 0,
  userStakedAccounts: [],
  stakingContracts: [],
  errorInput: "",
  category: null,
  status: {},
  setStatus: (status) => set((state) => ({ status })),
  setCategory: (category) => set((state) => ({ category })),
  setErrorInput: (errorInput) => set((state) => ({ errorInput })),
  setStakingContracts: (stakingContracts) =>
    set((state) => ({ stakingContracts })),
  setUserStakedAccounts: (userStakedAccounts) =>
    set((state) => ({ userStakedAccounts })),
  setGlobalStakedLada: (globalStakedLada) =>
    set((state) => ({ globalStakedLada })),
  setGlobalRewardsGiven: (globalRewardsGiven) =>
    set((state) => ({ globalRewardsGiven })),
  setLadaBalance: (ladaBalance) => set((state) => ({ ladaBalance })),
  setClient: (client) => set((state) => ({ client })),
}));

export const initGlobalValues = async (client) => {
  if (!client) return;

  try {
    const stakingAccounts = await new StakingContext(
      client
    ).getStakingContracts();
    let totalTVL = 0,
      totalRewards = 0;

    stakingAccounts.forEach((acc) => {
      totalTVL += acc.totalTvl.toNumber();
      totalRewards += acc.totalClaimed.toNumber();
    });

    useWalletStore.getState().setStakingContracts(stakingAccounts);
    useWalletStore.getState().setGlobalStakedLada(totalTVL / 1e9);
    useWalletStore.getState().setGlobalRewardsGiven(totalRewards / 1e9);
  } catch (e) {}
};

export const initStakeData = async (client) => {
  if (!client) return;

  // creates promise

  try {
    const fetchUserLADA = (async () => {
      const balance = await new StakingContext(client).getUserLadaBalance();
      return balance;
    })();

    const fetchUserStakedAccounts = (async () => {
      const stakingAccounts = await new StakingContext(client).getUserStaked();

      return stakingAccounts;
    })();

    const [userLada, stakedAccounts] = await Promise.all([
      fetchUserLADA,
      fetchUserStakedAccounts,
    ]);

    useWalletStore.getState().setClient(client);
    useWalletStore.getState().setUserStakedAccounts(stakedAccounts);
    useWalletStore
      .getState()
      .setLadaBalance(Math.trunc(userLada.value.uiAmount * 100) / 100);
  } catch (e) {}
};

export const updateData = async (client) => {
  initStakeData(client);
  initGlobalValues(client);
};
