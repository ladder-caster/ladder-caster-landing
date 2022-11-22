import React, { useEffect } from "react";
import Footer from "../footer";
import Nav from "../nav";
import { initGlobalValues, initStakeData, useWalletStore } from "../../zustand";
import ConnectWallet from "./connectWallet";
import { StakingCard } from "./StakingCard";
import { StakingInfo } from "./StakingInfo";
import { Status } from "./Status";
import { useAnchorWallet, useWallet } from "@solana/wallet-adapter-react";
import { StakingForm } from "./StakingForm";
import { Client } from "../../wallet/Connection";
import { useTranslation } from "next-i18next";
import {
  _page,
  _content,
  _column,
  _title,
  _subTitle,
  _top,
  _bottom,
  _float,
  _background,
} from "../../styles/staking.styled";

function Content() {
  const { t } = useTranslation();
  const globalStakedLada = useWalletStore((state) => state.globalStakedLada);
  const ladaBalance = useWalletStore((state) => state.ladaBalance);
  const setClient = useWalletStore((state) => state.setClient);
  const category = useWalletStore((state) => state.category);
  const setCategory = useWalletStore((state) => state.setCategory);
  const anchorWallet = useAnchorWallet();
  const { connected, disconnect } = useWallet();
  // per tier : {tier1: ladaCount, tier2: ladaCount, tier3: ladaCount}
  const globalRewardsGiven = useWalletStore(
    (state) => state.globalRewardsGiven
  );

  useEffect(() => {
    Client.connect(null).then((res) => {
      initGlobalValues(res);
    });
  }, []);

  useEffect(() => {
    if (connected) {
      Client.connect(anchorWallet).then((res) => initStakeData(res));
    } else {
      setClient(null);
    }
  }, [connected, disconnect]);

  useEffect(() => {
    if (category > 0 && document.getElementById("modal")) {
      const scrollDiv = document.getElementById("modal").offsetTop;
      const isMobile = window.innerWidth < 450;
      const subtractor = isMobile ? 200 : 490;
      if (isMobile)
        window.scrollTo({ top: scrollDiv - subtractor, behavior: "smooth" });
    }
  }, [category]);

  const cardSelect = (value) => {
    setCategory(value);
  };

  return (
    <_page>
      <Nav staking />
      <_content>
        <_float>
          <_background />
        </_float>
        <_column>
          <_title>{t("content.stakeLADA")}</_title>
          <_subTitle>
            {t("content.stakeDesc")}
            <br /> {t("content.stakeDesc2")}
          </_subTitle>
        </_column>
        <_top>
          <StakingInfo
            title={t("content.tvl")}
            subtitle={`${globalStakedLada?.toLocaleString()} LADA`}
            area={"a"}
          />
          {!connected ? (
            <_column $info>
              <ConnectWallet />
            </_column>
          ) : (
            <StakingInfo
              title={t("content.inWallet")}
              subtitle={`${ladaBalance?.toLocaleString()} LADA`}
              area={"b"}
            />
          )}
          <StakingInfo
            title={t("content.rewardsPaid")}
            subtitle={`${globalRewardsGiven?.toLocaleString()} LADA`}
            area={"c"}
          />
        </_top>
        <_bottom>
          <StakingCard
            title={t("content.flexible")}
            apy={t("content.flexibleAPY")}
            subtitle={t("content.flexibleDesc")}
            callback={(v) => cardSelect(0x1)}
            active={category == 0x1 ? "active" : null}
            connected={connected}
            area={"d"}
            color={"blue"}
          />
          <StakingCard
            title={t("content.hodler")}
            apy={t("content.hodlerAPY")}
            subtitle={t("content.hodlerDesc")}
            callback={(v) => cardSelect(0x2)}
            active={category == 0x2 ? "active" : null}
            connected={connected}
            area={"e"}
            color={"purple"}
          />
          <StakingCard
            title={t("content.diamond")}
            apy={t("content.diamondAPY")}
            subtitle={t("content.diamondDesc")}
            callback={(v) => cardSelect(0x3)}
            active={category == 0x3 ? "active" : null}
            connected={connected}
            area={"f"}
            color={"orange"}
          />
        </_bottom>
        {category >= 1 ? <StakingForm /> : null}
      </_content>
      <Footer />
      <Status />
    </_page>
  );
}

export default Content;
