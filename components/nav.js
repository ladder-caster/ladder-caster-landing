import { logoHat } from "../shared/icons";
import { useTranslation } from "next-i18next";
import {
  _nav,
  _wrapper,
  _logo,
  _container,
  _links,
  _link,
  _button,
  _refer,
  _menu,
  _strike,
  _menuContainer,
} from "../styles/nav.styled";
import Link from "next/link";
import { useState } from "react";

const Nav = ({ simple, staking }) => {
  const { t } = useTranslation();
  const [checked, seChecked] = useState(false);

  return (
    <_nav $simple={simple}>
      <_wrapper>
        <_logo href="/" target="_self" rel="noreferrer" $simple={simple}>
          {logoHat()} <span>LadderCaster</span>
        </_logo>
        <_menuContainer
          onClick={() => {
            seChecked(!checked);
          }}
        >
          <_menu>
            <_strike $checked={checked} />
            <_strike $checked={checked} />
            <_strike $checked={checked} />
          </_menu>
        </_menuContainer>
        <_container $checked={checked}>
          <_links $staking={staking}>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://ladder-caster.gitbook.io/laddercaster"
            >
              {t("nav.whitepaper")}
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://ladder-caster.gitbook.io/laddercaster/items"
            >
              {t("nav.items")}
            </a>
            <Link href={"/r/LadderCaster"}>{t("nav.referrals")}</Link>
            <a target="_self" rel="noreferrer" href="/staking">
              {t("nav.staking")}
            </a>
          </_links>
        </_container>
      </_wrapper>
    </_nav>
  );
};

export default Nav;
