import { StakingContext } from "../../../wallet/StakingContext";
import StakeItem from "./Item/StakeItem";
import { _stake, _container } from "./Stake.styled";

const Stake = () => {
  return (
    <_stake>
      <_container>
        <StakeItem contractId={StakingContext.getTier(1)} tier={1} />
        <StakeItem contractId={StakingContext.getTier(2)} tier={2} />
        <StakeItem contractId={StakingContext.getTier(3)} tier={3} />
      </_container>
    </_stake>
  );
};

export default Stake;
