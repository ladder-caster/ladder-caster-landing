import { useState } from "react";
import styles from "../../styles/FAQ.module.css";
import { chevron, wizard, lock } from "../../shared/icons";

const FAQ = () => {
  const [isActive, setIsActive] = useState(null);

  return (
    <div className={styles.faq}>
      <div className={styles.float}>
        <div className={styles.background} />
      </div>
      <div className={styles.wrapper}>
        <div className={styles.mainTitle}>Roadmap</div>
        <div className={styles.row}>
          <div className={`${styles.card} ${styles.activeCard}`}>
            <div>Alpha Launch {wizard()}</div>
            <span className={styles.date}>April 8th, 2022</span>
          </div>
          <div className={`${styles.lineLeft} ${styles.activeLine}`}></div>
        </div>
        <div className={`${styles.row} ${styles.right}`}>
          <div className={styles.lineRight}></div>
          <div className={styles.card}>
            <div>Staking released {lock()}</div>
            <span className={styles.date}>Q4 2022</span>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.card}>
            <div>DAO Formation {lock()}</div>
            <span className={styles.date}>Q1 2023</span>
          </div>
          <div className={styles.lineLeft}></div>
        </div>
        <div className={`${styles.row} ${styles.right}`}>
          <div className={styles.lineRight}></div>
          <div className={styles.card}>
            <div>Treasury Unlock {lock()}</div>
            <span className={styles.date}>Q3 2023</span>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.card}>
            <div>Community Takeover {lock()}</div>
            <span className={styles.date}>Q4 2023</span>
          </div>
        </div>
      </div>
      <div id="#faq" className={styles.wrapper}>
        <div className={styles.mainTitle}>Frequently asked questions</div>
        <div
          className={styles.container}
          onClick={() => setIsActive(isActive === 1 ? null : 1)}
        >
          <div
            className={`${styles.title}  ${
              isActive === 1 ? styles.active : ""
            }`}
          >
            What is LadderCaster? {chevron()}
          </div>
          <div
            className={`${styles.desc}  ${
              isActive === 1 ? styles.expanded : ""
            }`}
          >
            <div>
              A realtime mobile strategy and NFT market economy game, built on
              Solana.
            </div>
          </div>
        </div>
        <div
          className={styles.container}
          onClick={() => setIsActive(isActive === 2 ? null : 2)}
        >
          <div
            className={`${styles.title}  ${
              isActive === 2 ? styles.active : ""
            }`}
          >
            What is LADA? How do I get it?
            {chevron()}
          </div>
          <div
            className={`${styles.desc}  ${
              isActive === 2 ? styles.expanded : ""
            }`}
          >
            LADA will be the native LadderCaster in-game Token. It will be
            available on the Serum orderbook on launch day. LADA Tokens will
            initially be sold for $0.01.
          </div>
        </div>
        <div
          className={styles.container}
          onClick={() => setIsActive(isActive === 3 ? null : 3)}
        >
          <div
            className={`${styles.title}  ${
              isActive === 3 ? styles.active : ""
            }`}
          >
            Is there a Whitelist or Pre-Sale? {chevron()}
          </div>
          <div
            className={`${styles.desc}  ${
              isActive === 3 ? styles.expanded : ""
            }`}
          >
            There are no Whitelists or Pre-Sales. The only way to get LADA Token
            is to trade it on Serum/Jupiter April 8th at 18:00 UTC.
          </div>
        </div>
        <div
          className={styles.container}
          onClick={() => setIsActive(isActive === 4 ? null : 4)}
        >
          <div
            className={`${styles.title}  ${
              isActive === 4 ? styles.active : ""
            }`}
          >
            When is the mint? {chevron()}
          </div>
          <div
            className={`${styles.desc}  ${
              isActive === 4 ? styles.expanded : ""
            }`}
          >
            You will only be able to Mint Casters on April, 8th at 18:OO UTC.
            Casters will cost 1000 LADA Tokens.
          </div>
        </div>
        <div
          className={styles.container}
          onClick={() => setIsActive(isActive === 5 ? null : 5)}
        >
          <div
            className={`${styles.title}  ${
              isActive === 5 ? styles.active : ""
            }`}
          >
            What marketplaces can I use? {chevron()}
          </div>
          <div
            className={`${styles.desc}  ${
              isActive === 5 ? styles.expanded : ""
            }`}
          >
            LadderCaster characters and items can be listed on Fractal.is, a
            gaming NFT marketplace; Holaplex, an open-source marketplace, and
            Magic Eden, Solana’s largest marketplace. Players are able to list
            NFT drops for durable in-game assets and sell directly to other
            players.
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
