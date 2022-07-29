import React, {useState,useEffect} from 'react'
import Footer from './components/footer'
import Nav from './components/nav'
import {initStakeData, useWalletStore} from '../zustand/'
import ConnectWallet from './components/connectWallet';
import styles from '../styles/Staking.module.css'
import { useAnchorWallet, useWallet } from '@solana/wallet-adapter-react';
import { Client } from './wallet/Connection';

function Staking() {

  const globalStakedLada = useWalletStore(state => state.globalStakedLada);
  const currentlyStakedLada = useWalletStore(state => state.currentlyStakedLada);
  const globalRewardsGiven = useWalletStore(state => state.globalRewardsGiven);
  const ladaBalance = useWalletStore(state => state.ladaBalance);
  const wallet = useWalletStore(state => state.wallet);
  const setWallet = useWalletStore(state => state.setWallet);

  const [category, setCategory] = useState(null)
  const anchorWallet = useAnchorWallet();
  const {
    connected,
    disconnect,
  } = useWallet();
  console.log('WALLET',wallet)
  useEffect(() => {
    if (connected) {
      Client.connect(anchorWallet).then(res=>initStakeData(res))
    } else {
      setWallet(null)
    }
  }, [connected, disconnect])
  const cardSelect = (value) => {
    if (category === value) return;
    setCategory(value)
  }
  return (
    <div className={styles.page}>
      <Nav />
      <div className={styles.content}>
        <div className={styles.column +  styles.gap3}>
          <div className={styles.title}>
            Stake your LADA
          </div>
          <div className={styles.subtitle}>
            By staking your LADA here you become a total boss
            no questions asked for one whole year!
          </div>
        </div>
        <div className={styles['staking-grid']}>
          <StakingInfo title={'Total Value Locked'} subtitle={globalStakedLada} />
          <StakingInfo title={'LADA in wallet'} subtitle={wallet?ladaBalance:<ConnectWallet/>} />
          <StakingInfo title={'Rewards Paid'} subtitle={globalRewardsGiven} />
          <StakingCard title={'Flexible'} apy={'16% APY'} subtitle={`By staking your LADA here you become a total boss and a boss
no questions asked for one whole year!`} callback={(v)=>cardSelect(v??0x1)} active={category==0x1?'active':'default'} />
          <StakingCard title={"The Hodl'er"} apy={'36% APY'} subtitle={`By staking your LADA here you become a total boss and a boss
no questions asked for one whole year!`} callback={(v) => cardSelect(v??0x2)} active={category==0x2?'active':'default'} />
          <StakingCard title={'Diamond Hands'} apy={'60% APY'} subtitle={`By staking your LADA here you become a total boss and a boss
no questions asked for one whole year!`} callback={(v) => cardSelect(v??0x3)} active={category==0x3?'active':'default'} />
        </div>
       { category&& <div>

        </div>}
      </div>
      <Footer />
    </div>
  )
}

const StakingInfo = ({title,subtitle}) => {
  return <div className={styles.column}>
    <div className={styles['staking-title']}>
      {title}
    </div>
    <div className={styles['staking-content']}>
      {subtitle}
    </div>
  </div>
}

const StakingCard = ({ title, apy, subtitle, callback, active }) => { 
  const deselect = () => {
    callback(null)
  }
  return <div className={styles['staking-item'] + ' ' + active} onFocus={callback} onBlur={deselect}>
    <div className={styles['staking-title']}>
      {title}
    </div>
    <div className={styles['staking-apy']}>
      {apy}
    </div>
    <div className={styles['staking-content-container']}>

      <div className={styles['staking-content']}>
        {subtitle}
      </div>
    </div>
   
  </div>
}
export default Staking