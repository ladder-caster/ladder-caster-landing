import { useCallback } from "react";
import { updateData, useWalletStore } from "../../../../zustand";
import { StakingContext } from "../../../../wallet/StakingContext";
import { useTranslation } from "react-i18next";
import useStatus from "../useStatus";
import { useMemo } from "react";
import { getClaimableBalance } from "../../table/row/StakeRow";

export const useClaim = () => {
  const { t } = useTranslation();
  const [, setStatus] = useStatus();
  const client = useWalletStore((state) => state.client);
  const chainClock = useWalletStore((state) => state.chainClock);
  const stakingContracts = useWalletStore((state) => state.stakingContracts);
  const userStakedAccounts = useWalletStore(
    (state) => state.userStakedAccounts
  );

  const [ladaToRedeem, stakedAccounts] = useMemo(() => {
    let total = 0,
      accounts = [];
    for (const contract of userStakedAccounts) {
      const stakingContract = stakingContracts.find(
        (c) => c.publicKey.toString() === contract.stakingContract.toString()
      );
      const toClaim = getClaimableBalance(
        contract,
        stakingContract,
        chainClock
      ).number;
      total += toClaim;
      if (toClaim) accounts.push(contract);
    }

    return [total, accounts];
  }, [userStakedAccounts, stakingContracts]);

  const redeemLada = useCallback(async () => {
    if (ladaToRedeem <= 0) return;
    try {
      setStatus("claim", "loading", t("staking.form.error.claimLoading"));
      await new StakingContext(client).bulkClaim(stakedAccounts);

      setStatus("claim", "success", t("staking.form.error.claimSuccess"));
    } catch (e) {
      setStatus("claim", "error", typeof e === "string" ? e : e.message);
    } finally {
      updateData(client);
    }
  }, [client, t, ladaToRedeem, stakedAccounts]);

  return { redeemLada };
};
