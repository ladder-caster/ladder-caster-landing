import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Nav from './components/nav';
import Hero from './components/hero';
import Footer from './components/footer';
import FAQ from './components/faq';
import Featured from './components/featued';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModal, WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';
import { useMemo } from 'react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { TorusWalletAdapter,PhantomWalletAdapter,SolletExtensionWalletAdapter,SolflareWalletAdapter,SolletWalletAdapter,SlopeWalletAdapter } from '@solana/wallet-adapter-wallets';
export default function Home() {
  const myLoader = ({ src, width, quality }) => {
    return `../../../libs/design/assets/Landing1.jpg?w=${1920}&h=${1080}$"&q=${
      100 || 75
    }`;
  };
  const myLoader2 = ({ src, width, quality }) => {
    return `../../../libs/design/assets/background-2.jpg?w=${1920}&h=${1080}$"&q=${
      100 || 75
    }`;
  };
  const myLoader3 = ({ src, width, quality }) => {
    return `../../../libs/design/assets/background-dark.jpg?w=${1920}&h=${1080}$"&q=${
      100 || 75
    }`;
  };

  //WALLET STUFF
  const network = WalletAdapterNetwork.Mainnet;
  const endPoint = useMemo(() => clusterApiUrl(network), [network]);
  
  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      new SlopeWalletAdapter(),
      new SolletWalletAdapter({ network }),
      new SolletExtensionWalletAdapter({ network }),
      new TorusWalletAdapter({ network }),
      new SolflareWalletAdapter({ network }),
    
    ],
    [network],
  );
  return (
    <ConnectionProvider endpoint={endPoint}>
      <WalletProvider wallets={wallets} autoConnect={true}>
        <WalletModalProvider >

        
    <div className={styles.container}>
      <Head>
        <title>LadderCaster</title>
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
      <Nav />
      <Hero />
      <Featured />
      <FAQ />
      <Footer />
          </div>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}
