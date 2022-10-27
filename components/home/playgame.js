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
  _subtitle,
  _info_wrapper,
} from "../../styles/playgame.styled";

const Playgame = () => {
  const { t } = useTranslation();
  return (
    <_hero>
      <img
        src="/light.png"
        style={{
          width: "100%",
          position: "absolute",
          top: "0",
          left: "-50%",
          zIndex: 1,
        }}
      />
      <img
        src="/backGrass.png"
        style={{
          width: "100%",
          position: "absolute",
          bottom: "0",
          left: "0",
          zIndex: 1,
        }}
      />
      <img
        src="/fgGrass.png"
        style={{
          width: "100%",
          position: "absolute",
          bottom: "0",
          left: "0",
          zIndex: 2,
        }}
      />
      <_float>
        <_background />
      </_float>
      <_main>
        <_info>
          <_info_wrapper>
            <_subtitle>Play Game</_subtitle>
            <h1>Answer the Call to Save Avaria</h1>
            <_desc>
              The world of Avaria has been fractured into multiple universes and
              it needs your help to master time and restore order. Join the
              waitlist and recruit your friends for a special offer!
            </_desc>
            <_wrapper>
              <_button>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={"https://jup.ag/swap/USDC-LADA"}
                >
                  Join the Waitlist
                </a>
              </_button>
            </_wrapper>
          </_info_wrapper>
        </_info>
      </_main>
    </_hero>
  );
};

export default Playgame;
