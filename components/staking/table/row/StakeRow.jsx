import { useTranslation } from "react-i18next";
import {
  _row,
  _cell,
  _title,
  _unstake,
  _right,
  _rightContainer,
  _tooltip,
  _tooltipContent,
} from "../StakeTable.styled";
import { useMemo, useState } from "react";
import { useWalletStore } from "../../../../zustand";
import { StakingContext } from "../../../../wallet/StakingContext";
import { useUnstake } from "../../hooks/actions/useUnstake";
import { useClaim } from "../../hooks/actions/useClaim";

const StakeRow = ({ userContract }) => {
  const { t } = useTranslation();
  const [hovered, setHovered] = useState(false);
  const [hoveredExpired, setHoveredExpired] = useState(false);
  const stakingContracts = useWalletStore((state) => state.stakingContracts);
  const chainClock = useWalletStore((state) => state.chainClock);
  const { unstakeLada } = useUnstake();
  const { redeemSingleLada } = useClaim();

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
  const [claimable, expired] = useMemo(() => {
    const { number, expired } = getClaimableBalance(
      userContract,
      stakingContract,
      chainClock
    );

    return [number?.toLocaleString(), expired];
  }, [userContract, stakingContract, chainClock]);

  const tier = useMemo(() => {
    return StakingContext.getContract(stakingContract?.publicKey.toString());
  }, [stakingContract]);

  //TODO: to test, making another staking item
  const [active, remainingTime] = useMemo(() => {
    let active = false,
      remainingString = "";
    if (stakingContract?.lockPeriodInSeconds.toNumber() !== 0) {
      const lockInSecs = stakingContract?.lockPeriodInSeconds.toNumber();
      const stakedSecs =
        new Date().getTime() / 1000 - userContract.stakedStartTime.toNumber();
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
      <_cell
        onClick={async () => {
          await redeemSingleLada(userContract);
        }}
      >
        <_tooltip
          onMouseEnter={() => {
            setHovered(true);
          }}
          onMouseLeave={() => {
            setHovered(false);
          }}
        >
          <_title $tier={tier}>
            {title} {tier > 3 ? "*" : ""}
          </_title>
          {hovered & (tier > 3) ? (
            <_tooltipContent>{t("stake.disclaimer")}</_tooltipContent>
          ) : null}
        </_tooltip>
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
      <_cell>
        <_tooltip
          onMouseEnter={() => {
            setHoveredExpired(true);
          }}
          onMouseLeave={() => {
            setHoveredExpired(false);
          }}
        >
          {claimable} LADA {expired ? "*" : ""}
          {hoveredExpired && expired ? (
            <_tooltipContent $big>{t("stake.expired")}</_tooltipContent>
          ) : null}
        </_tooltip>
      </_cell>
      <_cell>
        <_right>
          <_rightContainer>
            <_unstake
              $tier={tier}
              $active={active}
              onClick={() => {
                // if (active)
                unstakeLada(userContract);
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
    { label: "day", ms: 24 * 60 * 60 },
    { label: "hour", ms: 60 * 60 },
    { label: "minute", ms: 60 },
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
  const apyPerSec = stakingContract?.apy / 100 / (365 * 24 * 60 * 60);
  const localTimeGap = new Date().getTime() / 1000 - chainClock.locale;
  const ellapsedSeconds = Math.trunc(
    chainClock.chain + localTimeGap - userContract.lastClaimed.toNumber()
  );

  const userStartTime = userContract?.stakedStartTime.toNumber();
  let endTime = stakingContract?.endTime?.toNumber() || 0;
  if (
    userStartTime + stakingContract?.lockPeriodInSeconds?.toNumber() >
    stakingContract?.endTime?.toNumber()
  ) {
    endTime = userStartTime + stakingContract?.lockPeriodInSeconds?.toNumber();
  }

  const endTimeEllapsedSeconds = Math.trunc(
    endTime - (chainClock.chain + localTimeGap)
  );

  let finalEllapsedSeconds =
    endTimeEllapsedSeconds < 0 && endTime
      ? ellapsedSeconds + endTimeEllapsedSeconds
      : ellapsedSeconds;

  let expired = false;
  if (finalEllapsedSeconds < 0) {
    expired = !!endTime;
    finalEllapsedSeconds = 0;
  }

  return {
    number: Math.floor(
      (userContract.stakedAmount.toNumber() / 1e9) *
        apyPerSec *
        finalEllapsedSeconds
    ),
    expired,
  };
};
