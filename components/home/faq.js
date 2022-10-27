import { useState } from "react";
import styles from "../../styles/FAQ.module.css";
import { chevron, wizard, lock } from "../../shared/icons";
import { useTranslation } from "next-i18next";
import {
  _faq,
  _wrapper,
  _container,
  _title,
  _desc,
  _subtitle,
} from "../../styles/faq.styled";

const FAQ = () => {
  const [isActive, setIsActive] = useState(null);
  const { t } = useTranslation();

  return (
    <_faq>
      <_wrapper id="#faq">
        <div>
          <_subtitle>FAQs</_subtitle>
          <h1>Everything You Need to Know</h1>
        </div>
        <div>
          <_container onClick={() => setIsActive(isActive === 1 ? null : 1)}>
            <_title $isActive={isActive === 2 ? styles.active : ""}>
              {t("home.faq.whatsLADA")} {chevron()}
            </_title>
            <_desc $isActive={isActive === 2 ? styles.expanded : ""}>
              {t("home.faq.LADADesc")}
            </_desc>
          </_container>
          <_container onClick={() => setIsActive(isActive === 2 ? null : 2)}>
            <_title $isActive={isActive === 2 ? styles.active : ""}>
              {t("home.faq.whitelist")} {chevron()}
            </_title>
            <_desc $isActive={isActive === 2 ? styles.expanded : ""}>
              {t("home.faq.whitelistDesc")}
            </_desc>
          </_container>
          <_container onClick={() => setIsActive(isActive === 3 ? null : 3)}>
            <_title $isActive={isActive === 3 ? styles.active : ""}>
              {t("home.faq.whenMint")} {chevron()}
            </_title>
            <_desc $isActive={isActive === 3 ? styles.expanded : ""}>
              {t("home.faq.mintDesc")}
            </_desc>
          </_container>
          <_container onClick={() => setIsActive(isActive === 4 ? null : 4)}>
            <_title $isActive={isActive === 4 ? styles.active : ""}>
              {t("home.faq.whatMarketplaces")} {chevron()}
            </_title>
            <_desc $isActive={isActive === 4 ? styles.expanded : ""}>
              {t("home.faq.marketplaceDesc")}
            </_desc>
          </_container>
        </div>
      </_wrapper>
    </_faq>
  );
};

export default FAQ;
