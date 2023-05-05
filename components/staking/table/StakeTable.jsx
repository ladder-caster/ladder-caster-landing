import { useTranslation } from "react-i18next";
import {
  _container,
  _grid,
  _head,
  _body,
  _row,
  _cell,
  _claim,
  _right,
} from "./StakeTable.styled";
import { useWalletStore } from "../../../zustand";
import StakeRow from "./row/StakeRow";
import { useClaim } from "../hooks/actions/useClaim";
import { useEffect, useMemo } from "react";
import { StakingContext } from "../../../wallet/StakingContext";

const StakeTable = () => {
  const { t } = useTranslation();
  const { redeemLada } = useClaim();
  const contracts = useWalletStore((state) => state.userStakedAccounts);

  const sortedContracts = useMemo(() => {
    return contracts.sort((a, b) => {
      return (
        StakingContext.getContract(a.stakingContract.toString()) -
        StakingContext.getContract(b.stakingContract.toString())
      );
    });
  }, [contracts]);

  if (!contracts || contracts.length === 0) return null;

  return (
    <_container>
      <_grid>
        <_head>
          <_row>
            <_cell>{t("stake.locked")}</_cell>
            <_cell>{t("stake.staked")}</_cell>
            <_cell>{t("stake.claimable")}</_cell>
            <_cell>
              <_right>
                <_claim
                  onClick={() => {
                    redeemLada();
                  }}
                >
                  {t("stake.claimAll")}
                </_claim>
              </_right>
            </_cell>
          </_row>
        </_head>
        <_body>
          {sortedContracts.map((contract, key) => (
            <StakeRow userContract={contract} key={`contracts-${key}`} />
          ))}
        </_body>
      </_grid>
    </_container>
  );
};

export default StakeTable;
