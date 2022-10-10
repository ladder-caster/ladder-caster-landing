import {
  _column,
  _stakingTitle,
  _stakingContent,
} from "../../styles/staking.styled";

export const StakingInfo = ({ title, subtitle }) => {
  return (
    <_column $info>
      <_stakingTitle>{title}</_stakingTitle>
      <_stakingContent>{subtitle}</_stakingContent>
    </_column>
  );
};
