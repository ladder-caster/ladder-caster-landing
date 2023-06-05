import { logoHat, discordIcon, twitterIcon } from "../shared/icons";
import { useTranslation } from "next-i18next";
import {
  _footer,
  _wrapper,
  _logo,
  _container,
  _title,
  _link,
  _social,
} from "../styles/footer.styled";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <_footer>
      <_wrapper>
        <_logo>
          {logoHat()} {t("laddercaster")} <span>{t("footer.copyright")}</span>
        </_logo>
        <_container>
          <_title>{t("footer.game")}</_title>
          <_link href={"#faq"}>{t("footer.faq")}</_link>
          <_link
            target="_blank"
            rel="noreferrer"
            // href="https://ladder-caster.gitbook.io/laddercaster"
            href="#"
          >
            {t("footer.whitepaper")}
          </_link>
          <_link
            target="_blank"
            rel="noreferrer"
            // href="https://ladder-caster.gitbook.io/laddercaster/items"
            href="#"
          >
            {t("footer.items")}
          </_link>
        </_container>
        <_container>
          <_title>{t("footer.about")}</_title>
          <_link
            target="_blank"
            rel="noreferrer"
            // href="https://laddercaster.gitbook.io/laddercaster"
            href="#"
          >
            {t("footer.team")}
          </_link>

          <_link href="mailto:info@laddercaster.com">
            {t("footer.contact")}
          </_link>
          <_link
            target="_blank"
            rel="noreferrer"
            href={"https://discord.com/invite/laddercaster"}
          >
            {t("footer.community")}
          </_link>
        </_container>
        <_container>
          <_title>{t("footer.tokenomics")}</_title>
          <_link
            target="_blank"
            rel="noreferrer"
            // href="https://ladder-caster.gitbook.io/laddercaster/tokenomics/resources"

            href="#"
          >
            {t("footer.resources")}
          </_link>
          <_link
            target="_blank"
            rel="noreferrer"
            // href="https://ladder-caster.gitbook.io/laddercaster/tokenomics/governance"
            href="#"
          >
            {t("footer.governance")}
          </_link>
          <_link
            target="_blank"
            rel="noreferrer"
            // href={
            //   "https://ladder-caster.gitbook.io/laddercaster/tokenomics/how-to-buy-lada"
            // }
            href="#"
          >
            {t("footer.howToBuy")}
          </_link>
        </_container>
        <_container>
          <_title>{t("footer.social")}</_title>
          <_social
            target="_blank"
            rel="noreferrer"
            href={"https://discord.com/invite/laddercaster"}
            style={{ backgroundColor: "#5159e9" }}
          >
            {discordIcon()} {t("footer.joinDiscord")}
          </_social>
          <_social
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/LadderCaster"
            style={{ backgroundColor: "#00acee" }}
          >
            {twitterIcon()} {t("footer.joinTwitter")}
          </_social>
        </_container>
      </_wrapper>
    </_footer>
  );
};

export default Footer;
