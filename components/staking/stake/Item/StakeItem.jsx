import { useTranslation } from "react-i18next";
import {
  _item,
  _left,
  _middle,
  _right,
  _title,
  _apr,
  _input,
  _inputIcon,
  _inputBox,
  _inputMax,
  _action,
} from "./StakeItem.styled";
import { useWalletStore } from "../../../../zustand";
import { useState, useMemo, useCallback } from "react";
import { useStake } from "../../hooks/actions/useStake";

const StakeItem = ({ contractId, tier }) => {
  const { t } = useTranslation();
  const contracts = useWalletStore((state) => state.stakingContracts);
  const ladaBalance = useWalletStore((state) => state.ladaBalance);
  const [ladaToStake, setLadaToStake] = useState("");
  const { stakeLada } = useStake();

  const handleStake = useCallback(() => {
    if (ladaToStake) stakeLada(ladaToStake, tier);
  }, [ladaToStake, tier]);

  const handleInputChange = useCallback((event) => {
    const floatValue = parseFloat(event.target.value);
    if (floatValue > 0 && !isNaN(floatValue)) {
      setLadaToStake(floatValue);
    } else if (
      (event.target.value === "." ||
        event.target.value.includes("0.") ||
        event.target.value === "0") &&
      !/[a-zA-Z]/.test(event.target.value)
    ) {
      setLadaToStake(event.target.value);
    } else if (event.target.value === "") {
      setLadaToStake(event.target.value);
    }
  }, []);

  const handleKeyPress = useCallback(
    (e) => {
      if (e.key === "Enter") {
        handleStake(ladaToStake, tier);
      }
    },
    [ladaToStake, tier]
  );

  const maxInput = useCallback(() => {
    if (ladaToStake < ladaBalance) {
      setLadaToStake(ladaBalance);
    }
  }, [ladaToStake, ladaBalance]);

  const contract = useMemo(() => {
    return contracts.find(
      (contract) => contract.publicKey.toString() === contractId.toString()
    );
  }, [contracts]);

  const title = useMemo(() => {
    switch (contract?.lockPeriodInSeconds.toNumber()) {
      case 90 * 86400: {
        return t("stake.quarter");
      }
      case 180 * 86400: {
        return t("stake.halfYear");
      }
      default:
        return t("stake.flexible");
    }
  }, [contract, t]);

  const placeholder = useMemo(() => {
    switch (tier) {
      case 1:
        return "10,000";
      case 2:
        return "100,000";
      case 3:
        return "1,000,000";
    }
  }, [tier]);

  const lockup = useMemo(() => {
    switch (contract?.lockPeriodInSeconds.toNumber()) {
      case 90 * 86400: {
        return t("stake.90day");
      }
      case 180 * 86400: {
        return t("stake.180day");
      }
      default:
        return t("stake.noLock");
    }
  }, [contract, t]);

  return (
    <_item>
      <_left>
        <_title $tier={tier}>{title}</_title>
        <_apr>
          {contract?.apy}
          {t("stake.percentAPR")}
        </_apr>
      </_left>
      <_right>
        <_middle>
          <_input>
            <_inputIcon>
              <img src="LADA.webp" />
            </_inputIcon>
            <_inputBox
              placeholder={placeholder}
              value={ladaToStake}
              onChange={handleInputChange}
              onKeyDown={handleKeyPress}
            />
            <_inputMax $tier={tier} onClick={maxInput}>
              {t("stake.max")}
            </_inputMax>
          </_input>
        </_middle>
        <_action
          $tier={tier}
          $active={ladaToStake}
          disabled={!ladaToStake}
          onClick={handleStake}
        >
          <div>{t("stake.stake")}</div>
          <div>{lockup}</div>
        </_action>
      </_right>
    </_item>
  );
};

export default StakeItem;
