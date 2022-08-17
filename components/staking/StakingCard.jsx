import React, { useState, useEffect, useRef, useMemo } from "react";
import styles from "../../styles/Staking.module.css";

export const StakingCard = ({
  title,
  apy,
  subtitle,
  callback,
  active,
  area,
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
    <div
      ref={ref}
      className={`${styles["staking-item"]} ${
        connected ? styles["connected"] : ""
      } ${styles[active]} ${styles[color]}`}
      onClick={(e) => {
        if (connected) callback(e);
      }}
      onBlur={deselect}
      style={{ gridArea: area }}
    >
      <div className={styles["staking-title"]}>{title}</div>
      <div className={styles["staking-apy"]}>{apy}</div>
      <div className={styles["staking-content-container"]}>
        <div className={styles["staking-content-subtitle"]}>{subtitle}</div>
      </div>
    </div>
  );
};
