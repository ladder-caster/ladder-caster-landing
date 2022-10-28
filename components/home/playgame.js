import { useTranslation } from "next-i18next";
import {
  _playgame,
  _float,
  _background,
  _main,
  _info,
  _desc,
  _wrapper,
  _button,
  _subtitle,
  _info_wrapper,
  _animationContainer,
  _light,
  _backGrass,
  _fgGrass,
} from "../../styles/playgame.styled";
import VOR from "../../pages/vor";

const Playgame = () => {
  const { t } = useTranslation();
  return (
    <_playgame>
      <_animationContainer>
        <VOR render="SCR6" />
      </_animationContainer>
      <_light src="/light.png" />
      <_backGrass src="/backGrass.png" />
      <_fgGrass src="/fgGrass.png" />
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
    </_playgame>
  );
};

export default Playgame;
