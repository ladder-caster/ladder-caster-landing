import { useCallback } from "react";
import { StakingContext } from "../../../../wallet/StakingContext";
import useStatus from "../useStatus";
import { useWallet } from "@solana/wallet-adapter-react";
import { useTranslation } from "react-i18next";
import { updateData, useWalletStore } from "../../../../zustand";

export const useStake = () => {
  const { t } = useTranslation();
  const ladaBalance = useWalletStore((state) => state.ladaBalance);
  const client = useWalletStore((state) => state.client);
  const [, setStatus] = useStatus();
  const { signTransaction } = useWallet();

  const stakeLada = useCallback(
    async (ladaToStake, tier) => {
      if (ladaToStake > ladaBalance) {
        setStatus("stake", "error", t("staking.form.error.stakeBalance"));
        return;
      }

      try {
        setStatus("stake", "loading", t("staking.form.error.stakeLoading"));

        const signedTx = await signTransaction(
          await new StakingContext(client).stakeLADA(ladaToStake, tier)
        );

        await client.connection.confirmTransaction(
          await client.connection.sendRawTransaction(signedTx.serialize())
        );
        setStatus("stake", "success", t("staking.form.error.stakeSuccess"));
      } catch (e) {
        setStatus("stake", "error", typeof e === "string" ? e : e.message);
      } finally {
        updateData(client);
      }
    },
    [ladaBalance, client, t, signTransaction]
  );

  return { stakeLada };
};
