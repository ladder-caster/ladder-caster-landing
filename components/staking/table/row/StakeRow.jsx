import { useTranslation } from "react-i18next";
import {
  _row,
  _cell,
  _title,
  _unstake,
  _right,
  _rightContainer,
} from "../StakeTable.styled";
import { useMemo } from "react";
import { useWalletStore } from "../../../../zustand";
import { StakingContext } from "../../../../wallet/StakingContext";
import { useUnstake } from "../../hooks/actions/useUnstake";

const StakeRow = ({ userContract }) => {
  const { t } = useTranslation();
  const stakingContracts = useWalletStore((state) => state.stakingContracts);
  const chainClock = useWalletStore((state) => state.chainClock);
  const { unstakeLada } = useUnstake();

  const stakingContract = stakingContracts.find(
    (contract) =>
      contract.publicKey.toString() === userContract.stakingContract.toString()
  );

  const title = useMemo(() => {
    switch (stakingContract?.lockPeriodInSeconds?.toNumber()) {
      case 90 * 86400: {
        return t("stake.quarter");
      }
      case 180 * 86400: {
        return t("stake.halfYear");
      }
      default:
        return t("stake.flexible");
    }
  }, [stakingContract, t]);

  //TODO: to test, need to add endTime
  const claimable = useMemo(() => {
    return getClaimableBalance(
      userContract,
      stakingContract,
      chainClock
    ).toLocaleString();
  }, [userContract, stakingContract, chainClock]);

  const tier = useMemo(() => {
    return StakingContext.getContract(stakingContract?.publicKey.toString());
  }, [stakingContract]);

  //TODO: to test, making another staking item
  const [active, remainingTime] = useMemo(() => {
    let active = false,
      remainingString = "";
    if (stakingContract?.lockPeriodInSeconds !== 0) {
      const lockInSecs = stakingContract?.lockPeriodInSeconds;
      const stakedSecs =
        new Date().getTime() / 1000 - userContract.stakedStartTime;

      if (stakedSecs < lockInSecs) {
        remainingString = getTimeLeft(lockInSecs - stakedSecs);
      } else {
        active = true;
      }
    } else {
      active = true;
    }

    return [active, remainingString];
  }, [stakingContract, userContract]);

  return (
    <_row>
      <_cell>
        <_title $tier={tier}>{title}</_title>
        <div>
          {stakingContract?.apy}
          {t("stake.percentAPR")}
        </div>
      </_cell>
      <_cell>
        {Math.round(
          userContract.stakedAmount.toNumber() / 1e9
        ).toLocaleString()}{" "}
        LADA
      </_cell>
      <_cell>{claimable} LADA</_cell>
      <_cell>
        <_right>
          <_rightContainer>
            <_unstake
              $tier={tier}
              $active={active}
              onClick={() => {
                if (active) unstakeLada(userContract);
              }}
            >
              {t("stake.unstake")}
            </_unstake>
            {remainingTime}
          </_rightContainer>
        </_right>
      </_cell>
    </_row>
  );
};

export default StakeRow;

export const getTimeLeft = (remainingSeconds) => {
  const units = [
    { label: "day", ms: 24 * 60 * 60 * 1000 },
    { label: "hour", ms: 60 * 60 * 1000 },
    { label: "minute", ms: 60 * 1000 },
  ];

  for (let i = 0; i < units.length; i++) {
    const unit = units[i];
    const value = Math.floor(remainingSeconds / unit.ms);
    if (value > 0) {
      return `${value} ${unit.label}${value > 1 ? "s" : ""}`;
    }
  }
  return "";
};

export const getClaimableBalance = (
  userContract,
  stakingContract,
  chainClock
) => {
  const apyPerSec = stakingContract?.apy / 100 / 31536000;
  const localTimeGap = new Date().getTime() / 1000 - chainClock.locale;
  const ellapsedSeconds = Math.trunc(
    chainClock.chain + localTimeGap - userContract.lastClaimed.toNumber()
  );

  return Math.floor(
    (userContract.stakedAmount.toNumber() / 1e9) * apyPerSec * ellapsedSeconds
  );
};
