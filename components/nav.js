import { useMemo } from "react";
import styles from "../styles/Nav.module.css";
import { motion, AnimatePresence } from "framer-motion";
import { logoHat } from "../shared/icons";

const Nav = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.wrapper}>
        <a className={styles.logo} href="/" target="_self" rel="noreferrer">
          {logoHat()} <span>LadderCaster</span>
        </a>
        <div className={styles.container}>
          <div className={styles.links}>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://ladder-caster.gitbook.io/laddercaster"
              className={styles.link}
            >
              Whitepaper
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://ladder-caster.gitbook.io/laddercaster/items"
              className={styles.link}
            >
              Items
            </a>
            <a
              className={styles.link}
              onClick={() => {
                const el = document.getElementById("#faq");
                if (el) {
                  const distance =
                    window.pageYOffset + el.getBoundingClientRect().top;
                  window.scrollTo(0, distance);
                }
              }}
            >
              FAQ
            </a>
            <a
              className={styles.link}
              target="_self"
              rel="noreferrer"
              href="staking"
            >
              Staking
            </a>
          </div>
          <a
            target="_blank"
            rel="noreferrer"
            href={"https://play.laddercaster.com"}
            className={styles.button}
          >
            Play Game
          </a>
        </div>
      </div>
    </div>
  );
};

export default Nav;
