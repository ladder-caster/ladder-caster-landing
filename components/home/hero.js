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
      <img
        src="/cliff.png"
        style={{
          width: "100vw",
          height: "calc(110vh + 182px)",
          position: "absolute",
          bottom: "-100vh",
          right: "-48px",
          zIndex: 1,
        }}
      />
      <img
        src="/sideCliff.png"
        style={{
          width: "35vw",
          position: "absolute",
          bottom: "-64px",
          right: 0,
          zIndex: 4,
        }}
      />
      <img
        src="/backLight.png"
        style={{
          width: "20vw",
          position: "absolute",
          bottom: "40vh",
          right: 0,
          zIndex: 1,
        }}
      />
      <img
        src="/frontLight.png"
        style={{
          width: "100vw",
          position: "absolute",
          top: "0",
          right: 0,
          zIndex: 3,
        }}
      />
      <img
        src="/sideLawn.png"
        style={{
          width: "20vw",
          position: "absolute",
          bottom: "0",
          left: 0,
          zIndex: 2,
        }}
      />
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
