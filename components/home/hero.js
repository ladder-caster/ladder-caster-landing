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
} from "../../styles/hero.styled";
import Link from "next/link";

const Hero = () => {
  const { t } = useTranslation();
  return (
    <_hero>
      <VOR render="SCR1" />
      <_cliff src="/cliff.png" />
      <_sideCliff src="/sideCliff.png" />
      <_backLight src="/backLight.png" />
      <_frontLight src="/frontLight.png" />
      <_float>
        <_sky />
        <VOR render="bg" />
        <_mountainsMid src="/mountains-mid.png" />
        <_bottomBG src="/bottom-bg.png" />
        <VOR render="forcefield" />
        <_sideLawn src="/sideLawn.png" />
      </_float>
      <_main>
        <_info>
          <h1>{t("laddercaster")}</h1>
          <_desc>{t("home.hero.realtimeMobile")}</_desc>
          <_wrapper>
            <_button>
              <Link href={"/r/laddercaster"}>{t("home.hero.cta")}</Link>
            </_button>
          </_wrapper>
        </_info>
      </_main>
    </_hero>
  );
};

export default Hero;
