import { useTranslation } from "next-i18next";
import VOR from "../../pages/vor";
import {
  _gameplay,
  _float,
  _background,
  _main,
  _info,
  _desc,
  _wrapper,
  _button,
  _subtitle,
  _table,
  _animationContainer,
} from "../../styles/gameplay.styled";

const Gameplay = () => {
  const { t } = useTranslation();
  return (
    <_gameplay>
      <_animationContainer>
        <VOR render="SCR2" />
      </_animationContainer>
      <_table src="/table.png" />
      <_float>{/* <_background /> */}</_float>
      <_main>
        <_info>
          <_subtitle>Gameplay</_subtitle>
          <h1>A Mobile Strategy and Market Game</h1>
          <_desc>
            Drawing inspiration from Runescape&#39;s market, Diablo&#39;s
            ladder, and DND&#39;s community-led storytelling, LadderCaster is a
            fresh new look at the world of blockchain gaming - and it&#39;s
            mobile-first! Experience a thrilling story that unfolds across a
            dynamic boardscape, loot your way through eight levels with an
            unlimited number of casters, and race your way to the top.
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
    </_gameplay>
  );
};

export default Gameplay;
