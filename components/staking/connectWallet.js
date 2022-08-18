import React, { useEffect } from "react";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import { useWallet } from "@solana/wallet-adapter-react";
import usePrevious from "./hooks/usePrevious";
import { useTranslation } from "next-i18next";
import {
  _connectText,
  _connectButton,
  _connectCenter,
} from "../../styles/staking.styled";

function ConnectWallet() {
  const { setVisible } = useWalletModal();
  const { t } = useTranslation();
  const { wallet, connected, connecting, connect } = useWallet();
  const prevWallet = usePrevious(wallet);

  const connectWallet = () => {
    setVisible(true);
  };

  useEffect(() => {
    if (!prevWallet && wallet && !connected && !connecting) {
      connect();
    }
  }, [wallet, prevWallet, connected]);

  return (
    <_connectCenter>
      <_connectButton onClick={connectWallet}>
        <_connectText>{t("staking.connect.wallet")}</_connectText>
      </_connectButton>
    </_connectCenter>
  );
}

export default ConnectWallet;
