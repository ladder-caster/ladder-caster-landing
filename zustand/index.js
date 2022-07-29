import { PublicKey } from '@solana/web3.js';
import create from 'zustand';
const LADA = new PublicKey('95bzgMCtKw2dwaWufV9iZyu64DQo1eqw6QWnFMUSnsuF')
export const useWalletStore = create((set) => ({
  wallet: null,
  setWallet: (wallet) => set((state) => ({ wallet: wallet })),
  currentlyStakedLada: 0,
  globalStakedLada: 0,
  globalRewardsGiven: 0,
  ladaBalance: 0,
  setCurrentlyStakedLada: (currentlyStakedLada) => set((state) => ({ currentlyStakedLada: currentlyStakedLada })),
  setGlobalStakedLada: (globalStakedLada) => set((state) => ({ globalStakedLada: globalStakedLada })),
  setGlobalRewardsGiven: (globalRewardsGiven) => set((state) => ({ globalRewardsGiven: globalRewardsGiven })),
  setLadaBalance: (ladaBalance) => set((state) => ({ ladaBalance: ladaBalance })),
}));

export const initStakeData = async(connection) => {
  if (!connection) return;
  console.log('CONNECTION',connection)

  //TODO: get other bits
  const [userLada] = await Promise.all(
    [
      connection.connection.getTokenAccountBalance(LADA)
    ]
  )
  console.log(userLada)
  useWalletStore.getState().setLadaBalance(userLada)
  useWalletStore.getState().setWallet(connection)
}