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
  _refer
} from "../../styles/playgame.styled";
import VOR from "../../pages/vor";
import Link from "next/link";

const Playgame = () => {
  const { t } = useTranslation();
  return (
    <_playgame>
      {/*<_animationContainer>*/}
      {/*  <VOR render="SCR6" />*/}
      {/*</_animationContainer>*/}
      {/*<_light src="/light.webp" />*/}
      {/*<_backGrass src="/backGrass.webp" />*/}
      {/*<_fgGrass src="/fgGrass.webp" />*/}
      {/*<_float>*/}
      {/*  <_background />*/}
      {/*</_float>*/}
      <_main>
        <_info>
          <_info_wrapper>
            <_subtitle>Invite Friends</_subtitle>
            <h1>Share & Earn</h1>
            <_desc>
              Join the community and invite your friends to gain rewards.
              Connect to the BuddyLink Network to share your username and earn
              in-game rewards when your friends play the game!
            </_desc>
            <_wrapper>
              <_refer>
                <Link  href={"https://play.laddercaster.com"}>
                  Refer a Friend!</Link>
              </_refer>
            </_wrapper>
          </_info_wrapper>
        </_info>
      </_main>
    </_playgame>
  );
};

export default Playgame;
