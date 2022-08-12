import styles from "../../../styles/Staking.module.css";

export const StakingInfo = ({ title, subtitle, area }) => {
  return (
    <div className={styles.column} style={{ gridArea: area }}>
      <div className={styles["staking-title"]}>{title}</div>
      <div className={styles["staking-content"]}>{subtitle}</div>
    </div>
  );
};
