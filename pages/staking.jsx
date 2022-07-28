import React from 'react'
import Footer from './components/footer'
import Nav from './components/nav'
import {useWalletStore} from '../zustand/'
import ConnectWallet from './components/connectWallet';
import styles from '../styles/Staking.module.css'
function Staking() {
  const globalStakedLada = useWalletStore(state => state.globalStakedLada);
  const currentlyStakedLada = useWalletStore(state => state.currentlyStakedLada);
  const globalRewardsGiven = useWalletStore(state => state.globalRewardsGiven);
  const wallet = useWalletStore(state => state.wallet);

  return (
    <div className={styles.page}>
      <Nav />
      <div className={styles.content}>
        <div className={styles.column + styles.gap3}>
          <div className={styles.title}>
            Staking
          </div>
          <div className={styles.subtitle}>
            Lock your LADA in reap in some STONK gains.
          </div>
        </div>
        <div className={styles['staking-details']}>
          <div className={styles.column + styles.gap2}>
            <div className={styles['staking-title']}>
              Total Staked
            </div>
            <div className={styles['staking-content']}>
              {globalStakedLada}
            </div>
          </div>
          <div className={styles.column + styles.gap2}>
            <div className={styles['staking-title']}>
              LADA Staked
            </div>
            <div className={styles['staking-content']}>
              {wallet?currentlyStakedLada:<ConnectWallet/>}
            </div>
          </div>
          <div className={styles.column + styles.gap2}>
            <div className={styles['staking-title']}>
              Rewards Given
            </div>
            <div className={styles['staking-content']}>
              {globalRewardsGiven}
            </div>
          </div>
        </div>
        <div className='staking'>
          <div className='staking-row'>

          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Staking