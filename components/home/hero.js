import { useTranslation } from "next-i18next";
import VOR from "../../pages/vor";
import {
  _hero,
  _float,
  _background,
  _main,
  _info,
  _desc,
  _wrapper,
  _button,
  _cliff,
  _sideCliff,
  _backLight,
  _frontLight,
  _sideLawn,
  _bottomBG,
  _mountainsMid,
  _sky,
  _social,
  _refer
} from "../../styles/hero.styled";
import Link from "next/link";
import {discordIcon, logoHat} from "../../shared/icons";

const Hero = () => {
  const { t } = useTranslation();
  return (
    <_hero>
      <VOR render="SCR1" />
      <_cliff src="/cliff.webp" />
      <_sideCliff src="/sideCliff.webp" />
      <_backLight src="/backLight.webp" />
      <_frontLight src="/frontLight.webp" />
      <_float>
        <_sky src="/sky.webp" />
        {/* <VOR render="bg" /> */}
        <_mountainsMid src="/mountains-mid.webp" />
        <_bottomBG src="/bottom-bg.webp" />
        <VOR render="forcefield" />
        <_sideLawn src="/sideLawn.webp" />
      </_float>
      <_main>
        <_info>
          <h1>{t("laddercaster")}</h1>
          <_desc>{t("home.hero.realtimeMobile")}</_desc>
          <_wrapper>
            <_refer>
              <Link href={"https://buddy.link/post/laddercaster-our-story"}>
                {t("home.hero.cta")}</Link>
            </_refer>
          </_wrapper>
        </_info>
      </_main>
    </_hero>
  );
};

export default Hero;
