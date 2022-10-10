import { discordIcon, solanaIcon, jupiterLogo } from "../../shared/icons";
import { useTranslation } from "next-i18next";
import {
  _hero,
  _float,
  _background,
  _overlay,
  _main,
  _chain,
  _info,
  _brush,
  _desc,
  _wrapper,
  _button,
  _discord,
} from "../../styles/hero.styled";

const Hero = () => {
  const { t } = useTranslation();
  return (
    <_hero>
      <_float>
        <_background />
      </_float>
      <_float>
        <_overlay />
      </_float>
      <_main>
        <_chain>
          {solanaIcon()} {t("home.hero.poweredSolana")}
        </_chain>
        <_info>
          <_brush>
            <img src="./brush.png" />
          </_brush>
          <h1>{t("laddercaster")}</h1>
          <_desc>{t("home.hero.realtimeMobile")}</_desc>
        </_info>
        <_wrapper>
          <_button>
            <a
              target="_blank"
              rel="noreferrer"
              href={"https://jup.ag/swap/USDC-LADA"}
            >
              <span>
                {jupiterLogo()} <h2>{t("home.hero.buyLADA")}</h2>
              </span>
            </a>
          </_button>
          <_discord>
            <a
              target="_blank"
              rel="noreferrer"
              href={"https://discord.com/invite/laddercaster"}
            >
              <span>
                {discordIcon()} {t("home.hero.joinDiscord")}
              </span>
            </a>
          </_discord>
        </_wrapper>
      </_main>
    </_hero>
  );
};

export default Hero;
