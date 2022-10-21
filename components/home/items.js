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
} from "../../styles/items.styled";

const Items = () => {
  const { t } = useTranslation();
  return (
    <_hero>
      <_float>
        <_background />
      </_float>
      <_main>
        <_info>
          <_subtitle>Items</_subtitle>
          <h1>Loot and Trade</h1>
          <_desc>
            Every item is fully on-chain. With over 400,000 NFT item and
            character combinations, equip your characters with items to maximize
            your strategy. Only the best will top the leaderboards.
          </_desc>
          <_wrapper>
            <_button>
              <a
                target="_blank"
                rel="noreferrer"
                href={"https://jup.ag/swap/USDC-LADA"}
              >
                View Items
              </a>
            </_button>
          </_wrapper>
        </_info>
      </_main>
    </_hero>
  );
};

export default Items;
