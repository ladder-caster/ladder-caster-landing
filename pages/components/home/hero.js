import { useMemo } from "react";
import styles from "../../../styles/Hero.module.css";
import { motion, AnimatePresence } from "framer-motion";
import {
  discordIcon,
  solanaIcon,
  lock,
  jupiterLogo,
} from "../../../shared/icons";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.float}>
        <div className={styles.background} />
      </div>
      <div className={styles.float}>
        <div className={styles.overlay} />
      </div>
      <main className={styles.main}>
        <div className={styles.chain}>{solanaIcon()} Powered by Solana</div>
        <div className={styles.info}>
          <div className={styles.brush}>
            <img src="./brush.png" />
          </div>
          <h1>LadderCaster</h1>
          <div className={styles.desc}>
            Real-time mobile strategy &amp; NFT market economy game
          </div>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.button}>
            <a
              target="_blank"
              rel="noreferrer"
              href={"https://jup.ag/swap/USDC-LADA"}
            >
              <span>
                {jupiterLogo()} <h2>Buy $LADA</h2>
              </span>
            </a>
          </div>
          <div className={styles.discord}>
            <a
              target="_blank"
              rel="noreferrer"
              href={"https://discord.com/invite/laddercaster"}
            >
              <span>{discordIcon()} Join the Discord</span>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Hero;
