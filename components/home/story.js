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
  const { t } = useTranslation();
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
          <_subtitle>{t("home.story.title")}</_subtitle>
          <h1>{t("home.story.header")}</h1>
          <_desc>{t("home.story.description")}</_desc>
          <_wrapper>
            <_button>
              <a href={"/r/laddercaster"}>{t("home.story.cta")}</a>
            </_button>
          </_wrapper>
        </_info>
      </_main>
    </_story>
  );
};

export default Story;
