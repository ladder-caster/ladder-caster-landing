import { logoHat } from "../shared/icons";
import { useTranslation } from "next-i18next";
import {
  _nav,
  _wrapper,
  _logo,
  _container,
  _connectContainer,
  _links,
  _link,
  _button,
} from "../styles/nav.styled";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import Link from "next/link";

const Nav = ({ simple }) => {
  const { t } = useTranslation();

  return (
    <_nav $simple={simple}>
      <_wrapper>
        <_logo href="/" target="_self" rel="noreferrer" $simple={simple}>
          {logoHat()} <span>LadderCaster</span>
        </_logo>
        {simple ? (
          <_connectContainer>
            <WalletMultiButton />
          </_connectContainer>
        ) : (
          <>
            <_container>
              <_links>
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
                <Link href={'/r/LadderCaster'}>
                  {t("nav.referrals")}
                </Link>
                <a target="_self" rel="noreferrer" href="staking">
                  {t("nav.staking")}
                </a>
              </_links>
              {/* <_button
                target="_blank"
                rel="noreferrer"
                href={"https://play.laddercaster.com"}
              >
                {t("nav.playGame")}
              </_button> */}
            </_container>
          </>
        )}
      </_wrapper>
    </_nav>
  );
};

export default Nav;
