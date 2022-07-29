import '../styles/globals.css';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import {WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { TorusWalletAdapter, PhantomWalletAdapter, SolletExtensionWalletAdapter, SolflareWalletAdapter, SolletWalletAdapter, SlopeWalletAdapter } from '@solana/wallet-adapter-wallets';
import {useMemo} from 'react'
require('@solana/wallet-adapter-react-ui/styles.css');

function MyApp({ Component, pageProps }) {

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

  return <ConnectionProvider endpoint={endPoint}>
    <WalletProvider wallets={wallets} autoConnect={true}>
      <WalletModalProvider >

  <Component {...pageProps} />
        </WalletModalProvider >
      </WalletProvider >
    </ConnectionProvider >;
}

export default MyApp;
