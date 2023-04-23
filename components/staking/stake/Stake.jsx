import { useWallet } from "@solana/wallet-adapter-react";
import { useCallback, useState } from "react";
import { useWalletStore, updateData } from "../../../zustand";
import {
  _modal,
  _modalTitle,
  _inputContainer,
  _valueContainer,
  _input,
  _maxButton,
  _button,
  _icon,
  _closed,
} from "../../../styles/staking.styled";
import { useTranslation } from "react-i18next";
import useStatus from "../hooks/useStatus";
import { StakingContext } from "../../../wallet/StakingContext";

const Stake = ({ category, contract }) => {
  const { t } = useTranslation();
  const [, setStatus] = useStatus();
  const [ladaToStake, setLadaToStake] = useState("");
  const ladaBalance = useWalletStore((state) => state.ladaBalance);
  const client = useWalletStore((state) => state.client);
  const { signTransaction } = useWallet();

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

  const maxInput = useCallback(() => {
    if (ladaToStake < ladaBalance) {
      setLadaToStake(ladaBalance);
    }
  }, [ladaToStake, ladaBalance]);

  const stakeLada = useCallback(async () => {
    if (ladaToStake > ladaBalance) {
      setStatus("stake", "error", t("staking.form.error.stakeBalance"));
      return;
    }

    try {
      setStatus("stake", "loading", t("staking.form.error.stakeLoading"));

      const signedTx = await signTransaction(
        await new StakingContext(client).stakeLADA(ladaToStake, category)
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
  }, [ladaToStake, ladaBalance, client, category, t, signTransaction]);

  return !contract?.isClosed ? (
    <>
      <_modalTitle $color={category}>{t("staking.form.stake")}</_modalTitle>
      <_inputContainer>
        <_valueContainer>
          <_icon src="LADA.webp" />
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
    </>
  ) : (
    <_closed>{t("staking.closed")}</_closed>
  );
};

export default Stake;
