import { useMemo } from "react";
import styles from "../styles/Footer.module.css";
import { motion, AnimatePresence } from "framer-motion";
import { logoHat, discordIcon, twitterIcon } from "../shared/icons";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          {logoHat()} LadderCaster <span>Copyright ©2022</span>
        </div>
        <div className={styles.container}>
          <div className={styles.title}>Game</div>
          <a
            onClick={() => {
              const el = document.getElementById("#faq");
              if (el) {
                const distance =
                  window.pageYOffset + el.getBoundingClientRect().top;
                window.scrollTo(0, distance);
              }
            }}
            className={styles.link}
          >
            FAQ
          </a>
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
        </div>
        <div className={styles.container}>
          <div className={styles.title}>About</div>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://laddercaster.gitbook.io/laddercaster"
            className={styles.link}
          >
            Team
          </a>

          <a href="mailto:info@laddercaster.com" className={styles.link}>
            Contact
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href={"https://discord.com/invite/laddercaster"}
            className={styles.link}
          >
            Community
          </a>
        </div>
        <div className={styles.container}>
          <div className={styles.title}>Tokenomics</div>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://ladder-caster.gitbook.io/laddercaster/tokenomics/resources"
            className={styles.link}
          >
            Resources
          </a>

          <a
            target="_blank"
            rel="noreferrer"
            href="https://ladder-caster.gitbook.io/laddercaster/tokenomics/governance"
            className={styles.link}
          >
            Governance
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href={
              "https://ladder-caster.gitbook.io/laddercaster/tokenomics/how-to-buy-lada"
            }
            className={styles.link}
          >
            How to buy LADA
          </a>
        </div>
        <div className={styles.container}>
          <div className={styles.title}>Social</div>
          <a
            target="_blank"
            rel="noreferrer"
            href={"https://discord.com/invite/laddercaster"}
            className={styles.social}
            style={{ backgroundColor: "#5159e9" }}
          >
            {discordIcon()} Join the Discord
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/LadderCaster"
            className={styles.social}
            style={{ backgroundColor: "#00acee" }}
          >
            {twitterIcon()} Join our Twitter
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
