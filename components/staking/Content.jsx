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
  _grid,
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
    Client.connect(null).then((res) => initGlobalValues(res));
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
      window.scrollTo({ top: scrollDiv - 465, behavior: "smooth" });
    }
  }, [category]);

  const cardSelect = (value) => {
    if (category === value) {
      setCategory(-1);
      return;
    }
    setCategory(value);
  };

  return (
    <_page>
      <Nav />
      <_content>
        <_column>
          <_title>{t("content.stakeLADA")}</_title>
          <_subTitle>{t("content.stakeDesc")}</_subTitle>
        </_column>
        <_grid>
          <StakingInfo
            title={t("content.tvl")}
            subtitle={`${globalStakedLada?.toLocaleString()} LADA`}
            area={"a"}
          />
          {!connected ? (
            <ConnectWallet />
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
          <StakingCard
            title={t("content.flexible")}
            apy={t("content.flexibleAPY")}
            subtitle={t("content.flexibleDesc")}
            callback={(v) => cardSelect(v.target ? 0x1 : -1)}
            active={category == 0x1 ? "active" : null}
            connected={connected}
            area={"d"}
            color={"blue"}
          />
          <StakingCard
            title={t("content.hodler")}
            apy={t("content.hodlerAPY")}
            subtitle={t("content.hodlerDesc")}
            callback={(v) => cardSelect(v.target ? 0x2 : -1)}
            active={category == 0x2 ? "active" : null}
            connected={connected}
            area={"e"}
            color={"purple"}
          />
          <StakingCard
            title={t("content.diamond")}
            apy={t("content.diamondAPY")}
            subtitle={t("content.diamondDesc")}
            callback={(v) => cardSelect(v.target ? 0x3 : -1)}
            active={category == 0x3 ? "active" : null}
            connected={connected}
            area={"f"}
            color={"orange"}
          />
        </_grid>
        {category >= 1 ? <StakingForm /> : null}
      </_content>
      <Footer />
      <Status />
    </_page>
  );
}

export default Content;
