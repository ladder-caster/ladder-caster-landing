import React, { useEffect } from "react";
import Footer from "../footer";
import Nav from "../nav";
import {
  cleanUser,
  initGlobalValues,
  initStakeData,
  useWalletStore,
} from "../../zustand";
import ConnectWallet from "./ConnectWallet";
import { Status } from "./Status";
import { useWallet } from "@solana/wallet-adapter-react";
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
  _stakingContainer,
  _disconnect,
  _stakingTitle,
  _stakingContent,
} from "../../styles/staking.styled";
import Stake from "./stake/Stake";
import StakeTable from "./table/StakeTable";
import { PublicKey } from "@solana/web3.js";

function Content() {
  const { t } = useTranslation();
  const globalStakedLada = useWalletStore((state) => state.globalStakedLada);
  const ladaBalance = useWalletStore((state) => state.ladaBalance);
  const setClient = useWalletStore((state) => state.setClient);
  const {
    connected,
    disconnect,
    disconnecting,
    signAllTransactions,
    signTransaction,
    publicKey,
  } = useWallet();

  const globalRewardsGiven = useWalletStore(
    (state) => state.globalRewardsGiven
  );

  useEffect(() => {
    Client.connect(null).then((res) => {
      initGlobalValues(res);
    });
  }, []);

  useEffect(() => {
    if (disconnecting) cleanUser();
  }, [disconnecting]);

  useEffect(() => {
    if (connected) {
      cleanUser();
      Client.connect({
        signAllTransactions,
        signTransaction,
        publicKey,
      }).then((res) => initStakeData(res));
    } else {
      setClient(null);
    }
  }, [connected]);

  return (
    <_page>
      <Nav staking />
      <_content>
        <_float>
          <_background />
        </_float>
        <_column $top>
          <_title>{t("content.stakeLADA")}</_title>
          <_subTitle>
            {t("content.stakeDesc")}
            <br /> {t("content.stakeDesc2")}
          </_subTitle>
        </_column>
        <_top>
          <_column $info>
            <_stakingTitle>{t("content.tvl")}</_stakingTitle>
            <_stakingContent>{`${globalStakedLada?.toLocaleString()} LADA`}</_stakingContent>
          </_column>
          {!connected ? (
            <_column $info>
              <ConnectWallet />
            </_column>
          ) : (
            <_column $column $info>
              <_stakingTitle>{t("content.inWallet")}</_stakingTitle>
              <_stakingContent>{`${ladaBalance?.toLocaleString()} LADA`}</_stakingContent>
              <_disconnect
                onClick={() => {
                  disconnect();
                }}
              >
                {t("content.disconnect")}
              </_disconnect>
            </_column>
          )}
          <_column $info>
            <_stakingTitle>{t("content.rewardsPaid")}</_stakingTitle>
            <_stakingContent>{`${globalRewardsGiven?.toLocaleString()} LADA`}</_stakingContent>
          </_column>
        </_top>
        <_bottom>
          <Stake />
          <StakeTable />
        </_bottom>
      </_content>
      <Footer />
      <Status />
    </_page>
  );
}

export default Content;
