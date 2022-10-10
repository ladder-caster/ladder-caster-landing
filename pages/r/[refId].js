import React, { useMemo } from "react";
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
  SolflareWalletAdapter,
  SlopeWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import ContentRef from "../../components/ContentRef";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import Head from "next/head";

require("@solana/wallet-adapter-react-ui/styles.css");

function Referrals() {
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

  const router = useRouter();
  const { refId } = router.query;

  const ContentRefMemo = useMemo(() => {
    return <ContentRef refId={refId} />;
  }, [refId]);

  return (
    <ConnectionProvider endpoint={endPoint}>
      <WalletProvider wallets={wallets} autoConnect={true}>
        <WalletModalProvider>
          <Head>
            <link
              rel="preload"
              href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
              as="font"
            />
          </Head>
          {ContentRefMemo}
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}

// pages/blog/[slug].js
// export async function getStaticPaths() {
//   return {
//     paths: [],
//     fallback: true,
//   };
// }

export const getServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default Referrals;
