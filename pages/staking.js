import React, { useMemo } from "react";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { clusterApiUrl } from "@solana/web3.js";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import Content from "../components/staking/Content";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";

require("@solana/wallet-adapter-react-ui/styles.css");

function Staking() {
  const network = WalletAdapterNetwork.Mainnet;
  const endPoint = useMemo(() => clusterApiUrl(network), [network]);

  return (
    <ConnectionProvider endpoint={endPoint}>
      <Head>
        <title>Staking | LadderCaster</title>
        <meta
          name="description"
          content="Real-time mobile strategy & NFT market economy game"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="LadderCaster" />
        <meta name="twitter:title" content="LadderCaster" />
        <meta property="og:site_name" content="LadderCaster" />
        <meta property="og:url" content="https://laddercaster.com/" />
        <meta name="twitter:url" content="https:/laddercaster.com" />
        <meta
          property="og:description"
          content="Real-time mobile strategy & NFT market economy game"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://website-5n2j62.s3.amazonaws.com/logo_open_graph.jpg"
        ></meta>
        <meta
          name="twitter:image"
          content="https://website-5n2j62.s3.amazonaws.com/logo_open_graph.jpg"
        />
      </Head>
      <WalletProvider wallets={[]} autoConnect={true}>
        <WalletModalProvider>
          <Content />
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}

export const getServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default Staking;
