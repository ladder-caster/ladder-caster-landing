import create from "zustand";
import { StakingContext } from "../wallet/StakingContext";

export const useWalletStore = create((set) => ({
  client: null,
  globalStakedLada: 0,
  globalRewardsGiven: 0,
  ladaBalance: 0,
  userStakedAccounts: [],
  stakingContracts: [],
  errorInput: "",
  category: 0x1,
  status: {},
  chainClock: { chain: 0, locale: 0 },
  setChainClock: (chainClock) => set((state) => ({ chainClock })),
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
    const stakingContext = new StakingContext(client);
    const stakingAccounts = await stakingContext.getStakingContracts();
    let totalTVL = 0,
      totalRewards = 0;

    stakingAccounts.forEach((acc) => {
      totalTVL += Number.parseInt(acc.totalTvl.toString());
      totalRewards += Number.parseInt(acc.totalClaimed.toString());
    });

    const blockTime = await stakingContext.getClock();

    useWalletStore.getState().setChainClock({
      chain: blockTime,
      locale: Math.trunc(new Date().getTime() / 1000),
    });
    useWalletStore.getState().setStakingContracts(stakingAccounts);
    useWalletStore.getState().setGlobalStakedLada(totalTVL / 1e9);
    useWalletStore
      .getState()
      .setGlobalRewardsGiven(Math.round(totalRewards / 1e9));
  } catch (e) {}
};

export const initStakeData = async (client) => {
  if (!client) return;

  try {
    const fetchUserLADA = new StakingContext(client).getUserLadaBalance();

    const fetchUserStakedAccounts = new StakingContext(client).getUserStaked();

    const [userLada, stakedAccounts] = await Promise.all([
      fetchUserLADA,
      fetchUserStakedAccounts,
    ]);

    useWalletStore.getState().setClient(client);
    useWalletStore.getState().setUserStakedAccounts(stakedAccounts);
    useWalletStore.getState().setLadaBalance(Math.trunc(userLada * 100) / 100);
  } catch (e) {
    console.log("error fetching user", e);
  }
};

export const cleanUser = () => {
  useWalletStore.getState().setClient(null);
  useWalletStore.getState().setUserStakedAccounts([]);
  useWalletStore.getState().setLadaBalance(0);
};

export const updateData = async (client) => {
  initStakeData(client);
  initGlobalValues(client);
};

export const initBuddyClient = async (client) => {
  useWalletStore.getState().setClient(client);
};
