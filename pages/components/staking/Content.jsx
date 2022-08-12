import React, { useState, useEffect, useRef, useMemo } from "react";
import Footer from "../footer";
import Nav from "../nav";
import {
  initGlobalValues,
  initStakeData,
  useWalletStore,
} from "../../../zustand";
import ConnectWallet from "./connectWallet";
import { StakingCard } from "./StakingCard";
import { StakingInfo } from "./StakingInfo";
import { Status } from "./Status";
import styles from "../../../styles/Staking.module.css";
import { useAnchorWallet, useWallet } from "@solana/wallet-adapter-react";
import { StakingForm } from "./StakingForm";
import { Client } from "../../wallet/Connection";
import { Keypair } from "@solana/web3.js";

function Content() {
  const globalStakedLada = useWalletStore((state) => state.globalStakedLada);
  const ladaBalance = useWalletStore((state) => state.ladaBalance);
  const client = useWalletStore((state) => state.client);
  const setClient = useWalletStore((state) => state.setClient);
  const category = useWalletStore((state) => state.category);
  const setCategory = useWalletStore((state) => state.setCategory);

  const anchorWallet = useAnchorWallet();
  const {
    connected,
    connecting,
    disconnect,
    wallet: baseWallet,
    publicKey,
  } = useWallet();
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
      window.scrollTo({ top: scrollDiv - 470, behavior: "smooth" });
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
    <div className={styles.page}>
      <Nav />
      <div className={styles.content}>
        <div className={styles.column}>
          <div className={styles.title}>Stake your LADA</div>
          <div className={styles.subtitle}>
            By staking your LADA here you become a total boss no questions asked
            for one whole year!
          </div>
        </div>
        <div className={styles["staking-grid"]}>
          <StakingInfo
            title={"Total Value Locked"}
            subtitle={`${globalStakedLada?.toLocaleString()} LADA`}
            area={"a"}
          />
          {!connected ? (
            <ConnectWallet />
          ) : (
            <StakingInfo
              title={"LADA in wallet"}
              subtitle={`${ladaBalance?.toLocaleString()} LADA`}
              area={"b"}
            />
          )}
          <StakingInfo
            title={"Rewards Paid"}
            subtitle={`${globalRewardsGiven?.toLocaleString()} LADA`}
            area={"c"}
          />
          <StakingCard
            title={"Flexible"}
            apy={"16% APY"}
            subtitle={`By staking your LADA here you become a total boss and a boss
no questions asked for one whole year!`}
            callback={(v) => cardSelect(v.target ? 0x1 : -1)}
            active={category == 0x1 ? "active" : "default"}
            connected={connected}
            area={"d"}
          />
          <StakingCard
            title={"The Hodl'er"}
            apy={"36% APY"}
            subtitle={`By staking your LADA here you become a total boss and a boss
no questions asked for one whole year!`}
            callback={(v) => cardSelect(v.target ? 0x2 : -1)}
            active={category == 0x2 ? "active" : "default"}
            connected={connected}
            area={"e"}
          />
          <StakingCard
            title={"Diamond Hands"}
            apy={"60% APY"}
            subtitle={`By staking your LADA here you become a total boss and a boss
no questions asked for one whole year!`}
            callback={(v) => cardSelect(v.target ? 0x3 : -1)}
            active={category == 0x3 ? "active" : "default"}
            connected={connected}
            area={"f"}
          />
        </div>
        {category >= 1 ? <StakingForm /> : null}
      </div>
      <Footer />
      <Status />
    </div>
  );
}

export default Content;
