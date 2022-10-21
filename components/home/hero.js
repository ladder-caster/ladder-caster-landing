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
      <_main>
        <_info>
          <h1>{t("laddercaster")}</h1>
          <_desc>{t("home.hero.realtimeMobile")}</_desc>
          <_wrapper>
            <_button>
              <a
                target="_blank"
                rel="noreferrer"
                href={"https://jup.ag/swap/USDC-LADA"}
                style={{ color: "#8553ca", backgroundColor: "white" }}
              >
                Join the Waitlist
              </a>
            </_button>
            <_button>
              <a
                target="_blank"
                rel="noreferrer"
                href={"https://discord.com/invite/laddercaster"}
              >
                <span>
                  Play the Alpha
                  {discordIcon()}
                </span>
              </a>
            </_button>
          </_wrapper>
        </_info>
      </_main>
    </_hero>
  );
};

export default Hero;
