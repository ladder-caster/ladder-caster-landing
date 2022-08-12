import { useCallback } from "react";
import { useMemo } from "react";
import styles from "../../../styles/Staking.module.css";
import { useWalletStore } from "../../../zustand";
import { forEach, isEmpty } from "lodash";

export const Status = () => {
  //Obj format: {actionLabel: 'claiming', status: 'loading', message: ''}
  const status = useWalletStore((state) => state.status);
  const setStatus = useWalletStore((state) => state.setStatus);

  const statusCards = useMemo(() => {
    if (!isEmpty(status)) {
      let list = [];

      forEach(status, (item, key) => {
        list.push(
          <div
            className={styles["card"]}
            onClick={() => {
              const newStatus = { ...status };
              delete newStatus[key];
              setStatus(newStatus);
            }}
          >
            <div className={styles["card-icon"]}>
              <div className={styles[item.status]} />
            </div>
            <div className={styles["card-info"]}>{item.message}</div>
          </div>
        );
      });

      return list;
    }

    return [];
  }, [status]);

  return <div className={styles["overlay"]}>{statusCards}</div>;
};
