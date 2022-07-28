import create from 'zustand';

export const useWalletStore = create((set) => ({
  wallet: null,
  setWallet: (wallet) => set((state) => ({ wallet: wallet })),
  currentlyStakedLada: 0,
  globalStakedLada: 0,
  globalRewardsGiven: 0,
  setCurrentlyStakedLada: (currentlyStakedLada) => set((state) => ({ currentlyStakedLada: currentlyStakedLada })),
  setGlobalStakedLada: (globalStakedLada) => set((state) => ({ globalStakedLada: globalStakedLada })),
  setGlobalRewardsGiven: (globalRewardsGiven) => set((state) => ({ globalRewardsGiven: globalRewardsGiven })),
}));