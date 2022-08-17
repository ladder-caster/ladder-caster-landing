import styles from "../../styles/Featured.module.css";
import {
  serumLogo,
  web3AuthLogo,
  promoPlanetLogo,
  bigBrainLogo,
  raydiumLogo,
  arweaveLogo,
} from "../../shared/icons";
import { useTranslation } from "next-i18next";

const Featured = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.featured}>
      <div className={styles.title}>{t("home.featured.investors")}</div>
      <div className={styles.container}>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://kano.one/"
          className={styles.image}
        >
          <img src="kanoone.png" />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.bigbrain.holdings/"
          className={styles.image}
        >
          {bigBrainLogo()}
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.palcapital.com/"
          className={styles.image}
        >
          <img src="palCapital.png" />
        </a>
      </div>
      <div className={styles.title}>{t("home.featured.poweredBy")}</div>
      <div className={styles.container}>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.ludex.gg/"
          className={styles.image}
        >
          <img src="ludex.png" />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://phantom.app/"
          className={styles.image}
        >
          <img src="phantom.png" />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.projectserum.com/"
          className={styles.image}
        >
          {serumLogo()}
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.arweave.org/"
          className={styles.image}
        >
          {arweaveLogo()}
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.metaplex.com/"
          className={styles.image}
        >
          <img src="metaplex.png" />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://raydium.io/"
          className={styles.image}
        >
          {raydiumLogo()}
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://jup.ag/"
          className={styles.image}
        >
          <img src="jupiter.png" />
        </a>
      </div>
      <div className={styles.title}>{t("home.featured.partneredWith")}</div>
      <div className={styles.container}>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://promoplanet.io/"
          className={styles.image}
        >
          {promoPlanetLogo()}
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://web3auth.io"
          className={styles.image}
        >
          {web3AuthLogo()}
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.fractal.is/"
          className={styles.image}
        >
          <img src="fractal.png" />
        </a>

        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.cardinal.so/"
          className={styles.image}
        >
          <img src="cardinal.png" />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.br1game.com/"
          className={styles.image}
        >
          <img src="br1.png" />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.datawisp.io/"
          className={styles.image}
        >
          <img src="datawisp.png" />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://sharky.fi/"
          className={styles.image}
        >
          <img src="sharky.png" />
        </a>
      </div>
    </div>
  );
};

export default Featured;
