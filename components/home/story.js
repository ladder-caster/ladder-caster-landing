import { useTranslation } from "next-i18next";
import VOR from "../../pages/vor";
import {
  _story,
  _float,
  _background,
  _overlay,
  _main,
  _info,
  _desc,
  _wrapper,
  _button,
  _subtitle,
  _animationContainer,
  _light,
  _backGrass,
  _fgGrass,
} from "../../styles/story.styled";

const Story = () => {
  return (
    <_story>
      <_animationContainer>
        <VOR render="SCR3" />
      </_animationContainer>
      <_light src="/light.png" />
      <_backGrass src="/backGrass.png" />
      <_fgGrass src="/fgGrass.png" />
      <_float>
        <_background />
        <_overlay />
      </_float>
      <_main>
        <_info>
          <_subtitle>Story</_subtitle>
          <h1>Master Time and Become a GrandCaster</h1>
          <_desc>
            In the land of Avaria where magic reigns supreme, GrandCaster
            Mejulah, the Oracle of Space and Time, has disappeared! In his
            absence, the landscape has begun to transform into ancient
            technological tiles with elemental properties and time’s disruption
            has induced a new variable: a multiverse.
          </_desc>
          <_desc>
            There is a game afoot and adventurers from every universe have
            different obstacles to overcome to uncover the mystery that has
            disrupted Avaria’s very matter.
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
        </_info>
      </_main>
    </_story>
  );
};

export default Story;
