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
            <h1>Share & Earn $10</h1>
            <_desc>
              Join the community and invite your friends to gain rewards.
              Connect to the BuddyLink Network to share your username and earn
              $10 each time your referees buy any casters.
            </_desc>
            <_wrapper>
              <_button>
                <a href={"/r/laddercaster"}>Refer a Friend!</a>
              </_button>
            </_wrapper>
          </_info_wrapper>
        </_info>
      </_main>
    </_playgame>
  );
};

export default Playgame;
