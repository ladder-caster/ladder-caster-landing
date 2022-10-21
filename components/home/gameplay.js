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
} from "../../styles/gameplay.styled";

const Gameplay = () => {
  const { t } = useTranslation();
  return (
    <_hero>
      <_float>
        <_background />
      </_float>
      <_main>
        <_info>
          <_subtitle>Gameplay</_subtitle>
          <h1>A Mobile Strategy and Market Game</h1>
          <_desc>
            Drawing inspiration from Runescape's market, Diablo's ladder, and
            DND's community-led storytelling, LadderCaster is a fresh new look
            at the world of blockchain gaming - and it's mobile-first!
            Experience a thrilling story that unfolds across a dynamic
            boardscape, loot your way through eight levels with an unlimited
            number of casters, and race your way to the top.
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

export default Gameplay;
