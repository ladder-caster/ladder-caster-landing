import { useState } from "react";
import styles from "../../styles/FAQ.module.css";
import { chevron, wizard, lock } from "../../shared/icons";
import { useTranslation } from "next-i18next";

const FAQ = () => {
  const [isActive, setIsActive] = useState(null);
  const { t } = useTranslation();

  return (
    <div className={styles.faq}>
      <div className={styles.float}>
        <div className={styles.background} />
      </div>
      <div className={styles.wrapper}>
        <div className={styles.mainTitle}>{t("home.faq.roadmap")}</div>
        <div className={styles.row}>
          <div className={`${styles.card} ${styles.activeCard}`}>
            <div>
              {t("home.faq.alphaLaunch")} {wizard()}
            </div>
            <span className={styles.date}>{t("home.faq.alphaDate")}</span>
          </div>
          <div className={`${styles.lineLeft} ${styles.activeLine}`}></div>
        </div>
        <div className={`${styles.row} ${styles.right}`}>
          <div className={styles.lineRight}></div>
          <div className={styles.card}>
            <div>
              {t("home.faq.stakingReleased")} {lock()}
            </div>
            <span className={styles.date}>{t("home.faq.stakingDate")}</span>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.card}>
            <div>
              {t("home.faq.DAOFormation")} {lock()}
            </div>
            <span className={styles.date}>{t("home.faq.DAODate")}</span>
          </div>
          <div className={styles.lineLeft}></div>
        </div>
        <div className={`${styles.row} ${styles.right}`}>
          <div className={styles.lineRight}></div>
          <div className={styles.card}>
            <div>
              {t("home.faq.treasuryUnlock")} {lock()}
            </div>
            <span className={styles.date}>{t("home.faq.treasuryDate")}</span>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.card}>
            <div>
              {t("home.faq.communityTakeover")} {lock()}
            </div>
            <span className={styles.date}>{t("home.faq.communityDate")}</span>
          </div>
        </div>
      </div>
      <div id="#faq" className={styles.wrapper}>
        <div className={styles.mainTitle}>{t("home.faq.frequentlyAsked")}</div>
        <div
          className={styles.container}
          onClick={() => setIsActive(isActive === 1 ? null : 1)}
        >
          <div
            className={`${styles.title}  ${
              isActive === 1 ? styles.active : ""
            }`}
          >
            {t("home.faq.whatsLC")} {chevron()}
          </div>
          <div
            className={`${styles.desc}  ${
              isActive === 1 ? styles.expanded : ""
            }`}
          >
            <div>{t("home.faq.LCDesc")}</div>
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
            {t("home.faq.whatsLADA")} {chevron()}
          </div>
          <div
            className={`${styles.desc}  ${
              isActive === 2 ? styles.expanded : ""
            }`}
          >
            {t("home.faq.LADADesc")}
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
            {t("home.faq.whitelist")} {chevron()}
          </div>
          <div
            className={`${styles.desc}  ${
              isActive === 3 ? styles.expanded : ""
            }`}
          >
            {t("home.faq.whitelistDesc")}
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
            {t("home.faq.whenMint")} {chevron()}
          </div>
          <div
            className={`${styles.desc}  ${
              isActive === 4 ? styles.expanded : ""
            }`}
          >
            {t("home.faq.mintDesc")}
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
            {t("home.faq.whatMarketplaces")} {chevron()}
          </div>
          <div
            className={`${styles.desc}  ${
              isActive === 5 ? styles.expanded : ""
            }`}
          >
            {t("home.faq.marketplaceDesc")}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
