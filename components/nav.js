import styles from "../styles/Nav.module.css";
import { logoHat } from "../shared/icons";
import { useTranslation } from "next-i18next";

const Nav = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.nav}>
      <div className={styles.wrapper}>
        <a className={styles.logo} href="/" target="_self" rel="noreferrer">
          {logoHat()} <span>{t("laddercaster")}</span>
        </a>
        <div className={styles.container}>
          <div className={styles.links}>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://ladder-caster.gitbook.io/laddercaster"
              className={styles.link}
            >
              {t("nav.whitepaper")}
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://ladder-caster.gitbook.io/laddercaster/items"
              className={styles.link}
            >
              {t("nav.items")}
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
              {t("nav.faq")}
            </a>
            <a
              className={styles.link}
              target="_self"
              rel="noreferrer"
              href="staking"
            >
              {t("nav.staking")}
            </a>
          </div>
          <a
            target="_blank"
            rel="noreferrer"
            href={"https://play.laddercaster.com"}
            className={styles.button}
          >
            {t("nav.playGame")}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Nav;
