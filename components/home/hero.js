import { useTranslation } from "next-i18next";
import VOR from "../../pages/vor";
import {
  _hero,
  _float,
  _background,
  _main,
  _info,
  _desc,
  _wrapper,
  _button,
  _cliff,
  _sideCliff,
  _backLight,
  _frontLight,
  _sideLawn,
} from "../../styles/hero.styled";

const Hero = () => {
  const { t } = useTranslation();
  return (
    <_hero>
      <VOR render="SCR1" />
      <_cliff src="/cliff.png" />
      <_sideCliff src="/sideCliff.png" />
      <_backLight src="/backLight.png" />
      <_frontLight src="/frontLight.png" />
      <_sideLawn src="/sideLawn.png" />
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
                  <img src="/arrow.png" />
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
