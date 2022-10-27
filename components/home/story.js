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
} from "../../styles/story.styled";

const Story = () => {
  const { t } = useTranslation();
  return (
    <_hero>
      <img
        src="/light.png"
        style={{
          width: "100%",
          position: "absolute",
          top: "0",
          left: "0",
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
    </_hero>
  );
};

export default Story;
