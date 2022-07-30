import React, { useState, useEffect, useRef, useMemo } from 'react'
import Footer from './components/footer'
import Nav from './components/nav'
import { initStakeData, useWalletStore } from '../zustand/'
import ConnectWallet from './components/connectWallet';
import styles from '../styles/Staking.module.css'
import { useAnchorWallet, useWallet } from '@solana/wallet-adapter-react';
import { Client } from './wallet/Connection';

function Staking() {

  const globalStakedLada = useWalletStore(state => state.globalStakedLada);
  // per tier : {tier1: ladaCount, tier2: ladaCount, tier3: ladaCount}
  const currentlyStakedLada = useWalletStore(state => state.currentlyStakedLada);
  const globalRewardsGiven = useWalletStore(state => state.globalRewardsGiven);
  const ladaBalance = useWalletStore(state => state.ladaBalance);
  const wallet = useWalletStore(state => state.wallet);
  const setWallet = useWalletStore(state => state.setWallet);
  //TODO: fix this
  const ladaToRedeem = 0;
  const timeLeft = 0
  
  const [category, setCategory] = useState(null)
  const [ladaToStake, setLadaToStake] = useState('');

  const anchorWallet = useAnchorWallet();
  const {
    connected,
    disconnect,
  } = useWallet();
  const disabled = useMemo(() => {
    return timeLeft <= 0 || category == 0x1;
  },[timeLeft])
  useEffect(() => {
    if (connected) {
      Client.connect(anchorWallet).then(res => initStakeData(res))
    } else {
      setWallet(null)
    }
  }, [connected, disconnect]);
  useEffect(() => {
    if (category > 0) {
      const scrollDiv = document.getElementById('modal').offsetTop
      window.scrollTo({ top: scrollDiv-70, behavior: 'smooth' });
    }
  },[category])
  const cardSelect = (value) => {
    if (category === value) { setCategory(-1); return; }
    
    setCategory(value)
  }
  const handleInputChange = (event) => {
    const floatValue = parseFloat(event.target.value);
    if (floatValue > 0 && !isNaN(floatValue) && floatValue <= ladaBalance) {
      setLadaToStake(floatValue)
    }
  }
  const maxInput = () => {
    if (ladaToStake < ladaBalance) { 
      setLadaToStake(ladaBalance)
    }
  }
  const stakeLada = () => {
    //TODO: do stake
  }
  const redeemLada = () => {
    //TODO: redeem lada
  }
  const unstakeLada = () => {
    //TODO: unstake lada
  }
  return (
    <div className={styles.page}>
      <Nav />
      <div className={styles.content}>
        <div className={styles.column}>
          <div className={styles.title}>
            Stake your LADA
          </div>
          <div className={styles.subtitle}>
            By staking your LADA here you become a total boss
            no questions asked for one whole year!
          </div>
        </div>
        <div className={styles['staking-grid']}>
          <StakingInfo title={'Total Value Locked'} subtitle={globalStakedLada} area={'a'} />
          <StakingInfo title={'LADA in wallet'} subtitle={wallet ? ladaBalance : <ConnectWallet />} area={'b'} />
          <StakingInfo title={'Rewards Paid'} subtitle={globalRewardsGiven} area={'c'} />
          <StakingCard title={'Flexible'} apy={'16% APY'} subtitle={`By staking your LADA here you become a total boss and a boss
no questions asked for one whole year!`} callback={(v) => cardSelect(v.target ? 0x1 : -1)} active={category == 0x1 ? 'active' : 'default'} area={'d'} />
          <StakingCard title={"The Hodl'er"} apy={'36% APY'} subtitle={`By staking your LADA here you become a total boss and a boss
no questions asked for one whole year!`} callback={(v) => cardSelect(v.target ? 0x2 : -1)} active={category == 0x2 ? 'active' : 'default'} area={'e'} />
          <StakingCard title={'Diamond Hands'} apy={'60% APY'} subtitle={`By staking your LADA here you become a total boss and a boss
no questions asked for one whole year!`} callback={(v) => cardSelect(v.target ? 0x3 : -1)} active={category == 0x3 ? 'active' : 'default'} area={'f'} />
        </div>
        {category >= 1 && <div id='modal' className={styles['staking-modal-container']}>
          <div className={styles['staking-modal']}>
            <div className={styles['staking-title']}>
              Stake
            </div>
            <div className={styles['staking-title']+' '+styles['duration']}>36 Days Left</div>
            <div className={styles['input-container']}>
              <div className={styles['value-container']}>
                <img src='LADA.png' className={styles['icon']} />
                <input className={styles['input']} type="number" placeholder="0" value={ladaToStake} onChange={handleInputChange} />
                <div className={styles['max-button']} onClick={maxInput}>MAX</div>
              </div>
              <button className={styles['button']} disabled={ladaToStake<=0} onClick={stakeLada}>
                Stake
              </button>
            </div>
            <div className={styles['detail-segment']}>

         
            <div className={styles['row']}>
              <div className={styles['info']}>
                <div className={styles['text']}>
                  LADA Earned
                </div>
                <div className={styles['text']}>
                  12345
                  </div>
                  
                </div>
                <div className={styles['info']}>
                  <button className={styles['button']} disabled={ladaToRedeem<=0} onClick={redeemLada}>
                Claim
              </button>
                </div>
            </div>
            <div className={styles['row']}>
              <div className={styles['info']}>
                <div className={styles['text']}>
                  Total Staked
                </div>
                <div className={styles['text']}>
                  12345
                </div>
                </div>
                <div className={styles['info']}>
                <div className={styles['text']+' '+styles['duration']}>
                  38 Days Left
                </div>
                  <button className={styles['button']} disabled={disabled} onClick={unstakeLada}>
                Unstake
              </button>
                </div>
            </div>
            </div>
          </div>
        </div>}
      </div>
      <Footer />
    </div>
  )
}

const StakingInfo = ({ title, subtitle, area }) => {
  return <div className={styles.column} style={{ gridArea: area }}>
    <div className={styles['staking-title']}>
      {title}
    </div>
    <div className={styles['staking-content']}>
      {subtitle}
    </div>
  </div>
}

const StakingCard = ({ title, apy, subtitle, callback, active, area }) => {
  const ref = useRef()

  const deselect = () => {
    if (active === 'active') {
      console.log('deselect')
      callback(-1)
    }
  }
  useOnClickOutside(ref, deselect)
  return <div ref={ref} className={styles['staking-item'] + ' ' + styles[active]} onClick={callback} onBlur={deselect} style={{ gridArea: area }}>
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
function useOnClickOutside(ref, handler) {
  useEffect(() => {
    const listener = event => {

      if (!ref.current || ref.current.contains(event.target) || event.path.some(x => x.className && x.className.includes('staking-modal') && !x.className.includes("container"))) {
        return;
      }

      handler(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}
export default Staking