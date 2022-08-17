import React, { useState, useEffect, useRef, useMemo } from "react";
import Footer from "../components/footer";
import Nav from "../components/nav";
import ConnectWallet from "../components/staking/connectWallet";
import { StakingCard } from "../components/staking/StakingCard";
import { StakingInfo } from "../components/staking/StakingInfo";
import styles from "../styles/Staking.module.css";
import { useAnchorWallet, useWallet } from "@solana/wallet-adapter-react";
import { Client } from "../wallet/Connection";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { clusterApiUrl } from "@solana/web3.js";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  TorusWalletAdapter,
  PhantomWalletAdapter,
  SolletExtensionWalletAdapter,
  SolflareWalletAdapter,
  SolletWalletAdapter,
  SlopeWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import Content from "../components/staking/Content";

require("@solana/wallet-adapter-react-ui/styles.css");

function Staking() {
  const network = WalletAdapterNetwork.Mainnet;
  const endPoint = useMemo(() => clusterApiUrl(network), [network]);
  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      new SlopeWalletAdapter(),
      new TorusWalletAdapter({ network }),
      new SolflareWalletAdapter({ network }),
    ],
    [network]
  );

  return (
    <ConnectionProvider endpoint={endPoint}>
      <WalletProvider wallets={wallets} autoConnect={true}>
        <WalletModalProvider>
          <Content />
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}

export default Staking;
