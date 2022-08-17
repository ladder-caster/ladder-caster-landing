import styles from "../../styles/Hero.module.css";
import { discordIcon, solanaIcon, lock, jupiterLogo } from "../../shared/icons";
import { useTranslation } from "next-i18next";

const Hero = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.hero}>
      <div className={styles.float}>
        <div className={styles.background} />
      </div>
      <div className={styles.float}>
        <div className={styles.overlay} />
      </div>
      <main className={styles.main}>
        <div className={styles.chain}>
          {solanaIcon()} {t("home.hero.poweredSolana")}
        </div>
        <div className={styles.info}>
          <div className={styles.brush}>
            <img src="./brush.png" />
          </div>
          <h1>{t("laddercaster")}</h1>
          <div className={styles.desc}>{t("home.hero.realtimeMobile")}</div>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.button}>
            <a
              target="_blank"
              rel="noreferrer"
              href={"https://jup.ag/swap/USDC-LADA"}
            >
              <span>
                {jupiterLogo()} <h2>{t("home.hero.buyLADA")}</h2>
              </span>
            </a>
          </div>
          <div className={styles.discord}>
            <a
              target="_blank"
              rel="noreferrer"
              href={"https://discord.com/invite/laddercaster"}
            >
              <span>
                {discordIcon()} {t("home.hero.joinDiscord")}
              </span>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Hero;
