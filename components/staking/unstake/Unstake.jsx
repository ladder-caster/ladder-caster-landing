import { useCallback, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useWalletStore, updateData } from "../../../zustand";
import { useWallet } from "@solana/wallet-adapter-react";
import {
  _selectContainer,
  _select,
  _button,
  _row,
  _info,
  _text,
} from "../../../styles/staking.styled";
import useStatus from "../hooks/useStatus";
import { StakingContext } from "../../../wallet/StakingContext";

const Unstake = ({ contract, stakedAccounts }) => {
  const { t } = useTranslation();
  const [, setStatus] = useStatus();
  const [accountSelected, setAccountSelected] = useState(0);
  const client = useWalletStore((state) => state.client);
  const { signTransaction } = useWallet();

  const handleDropdown = (event) => {
    setAccountSelected(event.target.value);
  };

  const options = useMemo(() => {
    let list = [];

    stakedAccounts.forEach((acc, key) => {
      list.push({
        label: `${t("staking.form.account")} ${key + 1} - ${(
          acc.stakedAmount / 1e9
        )?.toLocaleString()} LADA`,
        value: key,
      });
    });

    return list;
  }, [stakedAccounts, t]);

  const [unstakeDisabled, remainingDays] = useMemo(() => {
    const user = stakedAccounts[accountSelected];

    if (user) {
      let disabled = true,
        remainingString = "";
      if (contract?.lockPeriodInSeconds !== 0) {
        const lockInSecs = contract?.lockPeriodInSeconds;
        const stakedSecs = new Date().getTime() / 1000 - user.stakedStartTime;

        if (stakedSecs < lockInSecs) {
          remainingString = getTimeLeft(lockInSecs - stakedSecs);
        } else {
          disabled = false;
        }
      } else {
        disabled = false;
      }

      return [disabled, remainingString];
    }

    return [true, null];
  }, [accountSelected, stakedAccounts, contract]);

  const unstakeLada = useCallback(async () => {
    try {
      setStatus("unstake", "loading", t("staking.form.error.unstakeLoading"));
      const signedTx = await signTransaction(
        await new StakingContext(client).unstakeLADA(
          stakedAccounts[accountSelected]
        )
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
  }, [client, stakedAccounts, accountSelected, t, signTransaction]);

  return (
    <_row $drop>
      {options?.length ? (
        <>
          <_info $row>
            <Dropdown
              options={options}
              value={accountSelected}
              onChange={handleDropdown}
            />
          </_info>

          <_info $row $drop>
            <_text $duration>{remainingDays}</_text>
            <_button
              disabled={unstakeDisabled}
              onClick={unstakeLada}
              $secondary
            >
              {t("staking.form.unstake")}
            </_button>
          </_info>
        </>
      ) : null}
    </_row>
  );
};

export default Unstake;

const Dropdown = ({ value, options, onChange }) => {
  return (
    <_selectContainer>
      <_select value={value} onChange={onChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </_select>
    </_selectContainer>
  );
};

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
      return `${value} ${unit.label}${value > 1 ? "s" : ""} left`;
    }
  }
  return "Less than a minute left";
};
