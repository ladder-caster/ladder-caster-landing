import { useCallback } from "react";
import useStatus from "../useStatus";
import { useTranslation } from "react-i18next";
import { StakingContext } from "../../../../wallet/StakingContext";
import { updateData, useWalletStore } from "../../../../zustand";
import { useWallet } from "@solana/wallet-adapter-react";

export const useUnstake = () => {
  const { t } = useTranslation();
  const [, setStatus] = useStatus();
  const client = useWalletStore((state) => state.client);
  const { signTransaction } = useWallet();

  const unstakeLada = useCallback(
    async (userContract) => {
      try {
        setStatus("unstake", "loading", t("staking.form.error.unstakeLoading"));
        const signedTx = await signTransaction(
          await new StakingContext(client).unstakeLADA(userContract)
        );

        await client.connection.confirmTransaction(
          await client.connection.sendRawTransaction(signedTx.serialize())
        );
        setStatus("unstake", "success", t("staking.form.error.unstakeSuccess"));
      } catch (e) {
        setStatus("unstake", "error", typeof e === "string" ? e : e.message);
      } finally {
        updateData(client);
      }
    },
    [client, t, signTransaction]
  );

  return { unstakeLada };
};
