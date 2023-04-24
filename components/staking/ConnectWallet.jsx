import React from "react";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import { useTranslation } from "next-i18next";
import {
  _connectText,
  _connectButton,
  _connectCenter,
} from "../../styles/staking.styled";

function ConnectWallet() {
  const { setVisible } = useWalletModal();
  const { t } = useTranslation();

  const connectWallet = () => {
    setVisible(true);
  };

  return (
    <_connectCenter>
      <_connectButton onClick={connectWallet}>
        <_connectText>{t("staking.connect.wallet")}</_connectText>
      </_connectButton>
    </_connectCenter>
  );
}

export default ConnectWallet;
