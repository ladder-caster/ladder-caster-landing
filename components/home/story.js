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
  _refer
} from "../../styles/story.styled";
import Link from "next/link";

const Story = () => {
  const { t } = useTranslation();
  return (
    <_story>
      <_animationContainer>
        <VOR render="SCR3" />
      </_animationContainer>
      <_light src="/light.webp" />
      <_backGrass src="/backGrass.webp" />
      <_fgGrass src="/fgGrass.webp" />
      <_float>
        <_background />
        <_overlay />
      </_float>
      <_main>
        <_info>
          <_subtitle>{t("home.story.title")}</_subtitle>
          <h1>{t("home.story.header")}</h1>
          <_desc>{t("home.story.description")}</_desc>
          <_wrapper>
            <_refer>
              <Link  href={"https://buddy.link/shop/caster"}>
                {t("home.hero.cta")}</Link>
            </_refer>
          </_wrapper>
        </_info>
      </_main>
    </_story>
  );
};

export default Story;
