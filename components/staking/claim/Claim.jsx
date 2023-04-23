import { useCallback, useEffect, useState } from "react";
import { useWalletStore, updateData } from "../../../zustand";
import {
  _button,
  _row,
  _info,
  _text,
  _icon,
} from "../../../styles/staking.styled";
import { useTranslation } from "react-i18next";
import useStatus from "../hooks/useStatus";
import { StakingContext } from "../../../wallet/StakingContext";

const Claim = ({ stakedAccounts, contract, category, stakingContracts }) => {
  const { t } = useTranslation();
  const [, setStatus] = useStatus();
  const [ladaToRedeem, setLadaToRedeem] = useState(0);
  const [totalStaked, setTotalStaked] = useState(0);
  const client = useWalletStore((state) => state.client);
  const chainClock = useWalletStore((state) => state.chainClock);

  const calcRedeemAmount = useCallback(() => {
    let toClaim = 0,
      totStaked = 0;

    console.log(
      "stakedaccounts",
      JSON.stringify(
        stakedAccounts.map((a) => {
          return {
            ...a,
            stakedAmount: a.stakedAmount?.toNumber(),
            stakedStartTime: a.stakedStartTime?.toNumber(),
            lastClaimed: a.lastClaimed?.toNumber(),
          };
        })
      )
    );

    stakedAccounts.forEach((acc) => {
      const apyPerSec = contract?.apy / 100 / 31536000;
      const localTimeGap = new Date().getTime() / 1000 - chainClock.locale;

      const ellapsedSeconds = Math.trunc(
        chainClock.chain + localTimeGap - acc.lastClaimed.toNumber()
      );

      toClaim +=
        (acc.stakedAmount.toNumber() / 1e9) * apyPerSec * ellapsedSeconds;
      totStaked += acc.stakedAmount.toNumber() / 1e9;
    });

    setTotalStaked(Math.round(totStaked * 100) / 100);

    if (toClaim < 0) toClaim = 0;
    toClaim = toClaim.toFixed(4);
    return Math.round(toClaim * 100) / 100;
  }, [stakedAccounts, contract, chainClock]);

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
  }, [ladaToRedeem, client, stakedAccounts, t]);

  useEffect(() => {
    let timeout;
    if (stakedAccounts?.length && category && stakingContracts?.length) {
      setLadaToRedeem(calcRedeemAmount());

      timeout = setInterval(() => {
        setLadaToRedeem(calcRedeemAmount());
      }, 10000);
    } else {
      setTotalStaked(0);
      setLadaToRedeem(0);
    }

    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [category, stakedAccounts, stakingContracts]);

  return (
    <>
      <_row>
        <_info $spread $row>
          <_text>{t("staking.form.LADAEarned")}</_text>
          <_text>{ladaToRedeem?.toLocaleString()}</_text>
        </_info>
        <_info $row $desktop>
          <_button disabled={ladaToRedeem <= 0} onClick={redeemLada} $secondary>
            {t("staking.form.claim")}
          </_button>
        </_info>
      </_row>
      <_row $top>
        <_info $spread $row>
          <_text $color={category}>{t("staking.form.totalStaked")}</_text>
          <_text $color={category}>{totalStaked?.toLocaleString()}</_text>
        </_info>
      </_row>
      <_info $mobile>
        <_button disabled={ladaToRedeem <= 0} onClick={redeemLada} $secondary>
          {t("staking.form.claim")}
        </_button>
      </_info>
    </>
  );
};

export default Claim;
