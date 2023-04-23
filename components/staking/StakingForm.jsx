import React, { useMemo } from "react";
import { useWalletStore } from "../../zustand";
import { StakingContext } from "../../wallet/StakingContext";
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
import Unstake from "./unstake/Unstake";
import Stake from "./stake/Stake";
import Claim from "./claim/Claim";

export const StakingForm = ({}) => {
  const category = useWalletStore((state) => state.category);
  const stakingContracts = useWalletStore((state) => state.stakingContracts);
  const stakedAccounts = useWalletStore((state) => state.userStakedAccounts);

  const filteredStakedAccounts = useMemo(() => {
    return stakedAccounts.filter(
      (acc) =>
        acc.stakingContract.toString() ===
        StakingContext.getTier(category).toString()
    );
  }, [stakedAccounts, category]);

  const contract = useMemo(() => {
    return stakingContracts.find(
      (contract) =>
        contract.publicKey.toString() ===
        StakingContext.getTier(category).toString()
    );
  }, [stakingContracts, category]);

  return (
    <_modalContainer>
      <_modal id="modal">
        <Stake category={category} contract={contract} />
        <_detailSegment>
          <Claim
            stakingContracts={stakingContracts}
            category={category}
            stakedAccounts={filteredStakedAccounts}
            contract={contract}
          />
          <Unstake
            stakedAccounts={filteredStakedAccounts}
            contract={contract}
          />
        </_detailSegment>
      </_modal>
    </_modalContainer>
  );
};
