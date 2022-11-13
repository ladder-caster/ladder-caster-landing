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
  _refer
} from "../../styles/items.styled";
import Link from "next/link";

const Items = () => {
  const { t } = useTranslation();
  return (
    <_hero>
      <_float>
        <_background />
      </_float>
      <_main>
        <_info>
          <_subtitle>{t("home.loot.title")}</_subtitle>
          <h1>{t("home.loot.header")}</h1>
          <_desc>{t("home.loot.description")}</_desc>
          <_wrapper>
            <_refer>
              <Link href={"/r/laddercaster"}>
                {t("home.hero.cta")}</Link>
            </_refer>
          </_wrapper>
        </_info>
      </_main>
    </_hero>
  );
};

export default Items;
