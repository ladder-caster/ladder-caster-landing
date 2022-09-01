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
} from "../styles/nav.styled";

const Nav = () => {
  const { t } = useTranslation();

  return (
    <_nav>
      <_wrapper>
        <_logo href="/" target="_self" rel="noreferrer">
          {logoHat()} <span>{t("laddercaster")}</span>
        </_logo>
        <_links>
          <_link
            target="_blank"
            rel="noreferrer"
            href="https://ladder-caster.gitbook.io/laddercaster"
          >
            {t("nav.whitepaper")}
          </_link>
          <_link
            target="_blank"
            rel="noreferrer"
            href="https://ladder-caster.gitbook.io/laddercaster/items"
          >
            {t("nav.items")}
          </_link>
          {/* <_link
              onClick={() => {
                const el = document.getElementById("#faq");
                if (el) {
                  const distance =
                    window.pageYOffset + el.getBoundingClientRect().top;
                  window.scrollTo(0, distance);
                }
              }}
            >
              {t("nav.faq")}
            </_link> */}
          <_link target="_self" rel="noreferrer" href="staking">
            {t("nav.staking")}
          </_link>
        </_links>
        <_container>
          <_button
            target="_blank"
            rel="noreferrer"
            href={"https://play.laddercaster.com"}
          >
            {t("nav.playGame")}
          </_button>
        </_container>
      </_wrapper>
    </_nav>
  );
};

export default Nav;
