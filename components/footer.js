import styles from "../styles/Footer.module.css";
import { logoHat, discordIcon, twitterIcon } from "../shared/icons";
import { useTranslation } from "next-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          {logoHat()} {t("laddercaster")} <span>{t("footer.copyright")}</span>
        </div>
        <div className={styles.container}>
          <div className={styles.title}>{t("game")}</div>
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
            {t("footer.faq")}
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://ladder-caster.gitbook.io/laddercaster"
            className={styles.link}
          >
            {t("footer.whitepaper")}
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://ladder-caster.gitbook.io/laddercaster/items"
            className={styles.link}
          >
            {t("footer.items")}
          </a>
        </div>
        <div className={styles.container}>
          <div className={styles.title}>{t("footer.about")}</div>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://laddercaster.gitbook.io/laddercaster"
            className={styles.link}
          >
            {t("footer.team")}
          </a>

          <a href="mailto:info@laddercaster.com" className={styles.link}>
            {t("footer.contact")}
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href={"https://discord.com/invite/laddercaster"}
            className={styles.link}
          >
            {t("footer.community")}
          </a>
        </div>
        <div className={styles.container}>
          <div className={styles.title}>{t("footer.community")}</div>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://ladder-caster.gitbook.io/laddercaster/tokenomics/resources"
            className={styles.link}
          >
            {t("footer.resources")}
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://ladder-caster.gitbook.io/laddercaster/tokenomics/governance"
            className={styles.link}
          >
            {t("footer.governance")}
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href={
              "https://ladder-caster.gitbook.io/laddercaster/tokenomics/how-to-buy-lada"
            }
            className={styles.link}
          >
            {t("footer.howToBuy")}
          </a>
        </div>
        <div className={styles.container}>
          <div className={styles.title}>{t("footer.social")}</div>
          <a
            target="_blank"
            rel="noreferrer"
            href={"https://discord.com/invite/laddercaster"}
            className={styles.social}
            style={{ backgroundColor: "#5159e9" }}
          >
            {discordIcon()} {t("footer.joinDiscord")}
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/LadderCaster"
            className={styles.social}
            style={{ backgroundColor: "#00acee" }}
          >
            {twitterIcon()} {t("footer.joinTwitter")}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
