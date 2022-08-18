import React, {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
} from "react";
import { updateData, useWalletStore } from "../../zustand";
import { StakingContext } from "../../wallet/StakingContext";
import { useTranslation } from "next-i18next";
import {
  _selectContainer,
  _select,
  _modalContainer,
  _modal,
  _modalTitle,
  _inputContainer,
  _valueContainer,
  _input,
  _maxButton,
  _button,
  _detailSegment,
  _row,
  _info,
  _text,
  _icon,
} from "../../styles/staking.styled";

export const StakingForm = ({}) => {
  const { t } = useTranslation();
  const [ladaToStake, setLadaToStake] = useState("");
  const [accountSelected, setAccountSelected] = useState(0);
  const [ladaToRedeem, setLadaToRedeem] = useState(0);
  const [totalStaked, setTotalStaked] = useState(0);
  const ladaBalance = useWalletStore((state) => state.ladaBalance);
  const chainClock = useWalletStore((state) => state.chainClock);
  const client = useWalletStore((state) => state.client);
  const status = useWalletStore((state) => state.status);
  const refStatus = useRef({});
  const setStatus = useWalletStore((state) => state.setStatus);
  const category = useWalletStore((state) => state.category);
  const stakingContracts = useWalletStore((state) => state.stakingContracts);
  const userStakedAccounts = useWalletStore(
    (state) => state.userStakedAccounts
  );
  const stakingContractPK = useMemo(() => {
    return StakingContext.getTier(category);
  }, [category]);
  const filteredStakedAccounts = useMemo(() => {
    return userStakedAccounts.filter((acc) => {
      return acc.stakingContract.toString() === stakingContractPK?.toString();
    });
  }, [userStakedAccounts, category, stakingContractPK]);
  const contractObj = useMemo(() => {
    return stakingContracts.find(
      (contract) =>
        contract.publicKey.toString() === stakingContractPK?.toString()
    );
  }, [stakingContracts, stakingContractPK]);
  const color = useMemo(() => {
    switch (category) {
      case 1: {
        return "blue";
      }
      case 2: {
        return "purple";
      }
      case 3: {
        return "orange";
      }
    }
  }, [category]);
  const handleInputChange = (event) => {
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
  };
  const changeStatus = useCallback(
    (type, statusLabel, message) => {
      setStatus({
        ...refStatus.current,
        [type]: {
          status: statusLabel,
          message: message,
        },
      });
    },
    [status]
  );

  const stakeLada = useCallback(async () => {
    if (ladaToStake > ladaBalance) {
      changeStatus("stake", "error", t("staking.form.error.stakeBalance"));
      return;
    }

    try {
      changeStatus("stake", "loading", t("staking.form.error.stakeLoading"));
      await client.connection.confirmTransaction(
        await new StakingContext(client).stakeLADA(ladaToStake, category)
      );
      changeStatus("stake", "success", t("staking.form.error.stakeSuccess"));
    } catch (e) {
      changeStatus("stake", "error", typeof e === "string" ? e : e.message);
    } finally {
      updateData(client);
    }
  }, [ladaToStake, ladaBalance, client, category, t]);

  const unstakeLada = useCallback(async () => {
    try {
      changeStatus("unstake", "loading", t("staking.form.error.stakeLoading"));
      await client.connection.confirmTransaction(
        await new StakingContext(client).unstakeLADA(
          filteredStakedAccounts[accountSelected]
        )
      );
      changeStatus(
        "unstake",
        "success",
        t("staking.form.error.unstakeSuccess")
      );
    } catch (e) {
      changeStatus("unstake", "error", typeof e === "string" ? e : e.message);
    } finally {
      updateData(client);
    }
  }, [client, filteredStakedAccounts, accountSelected, t]);

  const redeemLada = useCallback(async () => {
    if (ladaToRedeem <= 0) return;
    try {
      changeStatus("claim", "loading", t("staking.form.error.claimLoading"));
      await new StakingContext(client).bulkClaim(filteredStakedAccounts);
      changeStatus("claim", "success", t("staking.form.error.claimSuccess"));
    } catch (e) {
      changeStatus("claim", "error", typeof e === "string" ? e : e.message);
    } finally {
      updateData(client);
    }
  }, [ladaToRedeem, client, filteredStakedAccounts, t]);

  const maxInput = useCallback(() => {
    if (ladaToStake < ladaBalance) {
      setLadaToStake(ladaBalance);
    }
  }, [ladaToStake, ladaBalance]);

  const handleDropdown = (event) => {
    setAccountSelected(event.target.value);
  };

  const calcRedeemAmount = useCallback(() => {
    let toClaim = 0,
      totStaked = 0;

    filteredStakedAccounts.forEach((acc) => {
      const apyPerSec = contractObj?.apy / 100 / 31536000;
      const localTimeGap = new Date().getTime() / 1000 - chainClock.locale;

      const ellapsedSeconds = Math.trunc(
        chainClock.chain + localTimeGap - acc.lastClaimed.toNumber()
      );

      toClaim +=
        (acc.stakedAmount.toNumber() / 1e9) * apyPerSec * ellapsedSeconds;
      totStaked += acc.stakedAmount.toNumber() / 1e9;
    });

    setTotalStaked(totStaked);

    toClaim = toClaim.toFixed(4);
    return toClaim;
  }, [filteredStakedAccounts, contractObj]);

  useEffect(() => {
    refStatus.current = status;
  }, [status]);

  useEffect(() => {
    let timeout;
    if (
      filteredStakedAccounts?.length &&
      category &&
      stakingContracts?.length
    ) {
      setLadaToRedeem(calcRedeemAmount());

      timeout = setInterval(() => {
        setLadaToRedeem(calcRedeemAmount());
      }, 10000);
    }

    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [category, filteredStakedAccounts, stakingContracts]);

  const options = useMemo(() => {
    let list = [];

    filteredStakedAccounts.forEach((acc, key) => {
      list.push({
        label: `${t("staking.form.account")} ${key + 1} - ${
          acc.stakedAmount / 1e9
        } LADA`,
        value: key,
      });
    });

    return list;
  }, [filteredStakedAccounts, t]);

  const [unstakeDisabled, remainingDays] = useMemo(() => {
    const user = filteredStakedAccounts[accountSelected];

    if (user) {
      let disabled = true,
        remainingString = "";
      if (contractObj?.lockPeriodInSeconds !== 0) {
        const lockInSecs = contractObj?.lockPeriodInSeconds;
        const stakedSecs = new Date().getTime() / 1000 - user.stakedStartTime;

        if (stakedSecs < lockInSecs) {
          const remainingSecs = lockInSecs - stakedSecs;

          if (remainingSecs > 86400) {
            const days = Math.trunc(remainingSecs / 86400);
            remainingString = `${days} day${days !== 0 ? "s" : ""} left`;
          } else if (remainingSecs > 3600) {
            const hours = Math.trunc(remainingSecs / 3600);
            remainingString = `${hours} hour${hours !== 0 ? "s" : ""} left`;
          } else if (remainingSecs > 60) {
            const minutes = Math.trunc(remainingSecs / 3600);
            remainingString = `${minutes} min left`;
          }
        } else {
          disabled = false;
        }
      } else {
        disabled = false;
      }

      return [disabled, remainingString];
    }

    return [true, null];
  }, [accountSelected, filteredStakedAccounts, contractObj]);

  return (
    <_modalContainer>
      <_modal id="modal">
        <_modalTitle $color={color}>{t("staking.form.stake")}</_modalTitle>
        <_inputContainer>
          <_valueContainer>
            <_icon src="LADA.png" />
            <_input
              placeholder="Amount"
              value={ladaToStake}
              onChange={handleInputChange}
            />
            <_maxButton onClick={maxInput}>{t("staking.form.max")}</_maxButton>
          </_valueContainer>
          <_button
            disabled={ladaBalance <= 0 || !client}
            onClick={stakeLada}
            $stake
          >
            {t("staking.form.stake")}
          </_button>
        </_inputContainer>
        <_detailSegment>
          <_row>
            <_info $spread $row>
              <_text>{t("staking.form.LADAEarned")}</_text>
              <_text>{ladaToRedeem}</_text>
            </_info>
            <_info $row>
              <_button
                disabled={ladaToRedeem <= 0}
                onClick={redeemLada}
                $secondary
              >
                {t("staking.form.claim")}
              </_button>
            </_info>
          </_row>
          <_row $top>
            <_info $spread $row>
              <_text $color={color}>{t("staking.form.totalStaked")}</_text>
              <_text $color={color}>{totalStaked?.toLocaleString()}</_text>
            </_info>
          </_row>
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
        </_detailSegment>
      </_modal>
    </_modalContainer>
  );
};

const Dropdown = ({ value, options, onChange }) => {
  return (
    <_selectContainer>
      <_select value={value} onChange={onChange}>
        {options.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </_select>
    </_selectContainer>
  );
};
