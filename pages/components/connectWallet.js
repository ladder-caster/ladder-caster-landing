import React from 'react'
import styles from '../../styles/Staking.module.css'
import { useWalletModal } from '@solana/wallet-adapter-react-ui';
function ConnectWallet() {
  const { setVisible } = useWalletModal();
  const connectWallet = () => {
    setVisible(true);
  }
  return (
    <div className={styles['connect-button']} onClick={connectWallet}>
      <div className={styles['connect-button-text']}>
        Connect Wallet
      </div>
    </div>
  )
}

export default ConnectWallet