import React, { useRef } from "react";
import {
  _item,
  _stakingTitle,
  _apy,
  _container,
  _contentSubtitle,
} from "../../styles/staking.styled";

export const StakingCard = ({
  title,
  apy,
  subtitle,
  callback,
  active,
  connected,
  color,
}) => {
  const ref = useRef();

  const deselect = () => {
    if (active === "active") {
      callback(-1);
    }
  };

  return (
    <_item
      ref={ref}
      $connected={connected}
      $active={active}
      $color={color}
      onClick={(e) => {
        if (connected) callback(e);
      }}
      onBlur={deselect}
    >
      {/* <_stakingTitle $title>{title}</_stakingTitle> */}
      <_apy>{apy}</_apy>
      <_container>
        <_contentSubtitle>{subtitle}</_contentSubtitle>
      </_container>
    </_item>
  );
};
