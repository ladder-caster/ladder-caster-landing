import React, { useEffect } from "react";
import styles from "../../styles/Staking.module.css";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import { useWallet } from "@solana/wallet-adapter-react";
import usePrevious from "./hooks/usePrevious";
import { useTranslation } from "next-i18next";

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
    <div className={styles["connect-button-center"]}>
      <div className={styles["connect-button"]} onClick={connectWallet}>
        <div className={styles["connect-button-text"]}>
          {t("staking.connect.wallet")}
        </div>
      </div>
    </div>
  );
}

export default ConnectWallet;
