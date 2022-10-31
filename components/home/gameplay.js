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
import Link from "next/link";

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
          <_subtitle>{t('home.gameplay.title')}</_subtitle>
          <h1>{t('home.gameplay.header')}</h1>
          <_desc>
            {t('home.gameplay.description')}
          </_desc>
          <_wrapper>
            <_button>
              <Link href={'/r/LadderCaster'}>
                {t('home.gameplay.cta')}
              </Link>
            </_button>
          </_wrapper>
        </_info>
      </_main>
    </_gameplay>
  );
};

export default Gameplay;
