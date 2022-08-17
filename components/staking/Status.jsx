import { useCallback, useEffect, useRef } from "react";
import { useMemo } from "react";
import styles from "../../styles/Staking.module.css";
import { useWalletStore } from "../../zustand";
import { forEach, isEmpty } from "lodash";
import usePrevious from "./hooks/usePrevious";

export const Status = () => {
  //Obj format: {actionLabel: 'claiming', status: 'loading', message: ''}
  const status = useWalletStore((state) => state.status);
  const setStatus = useWalletStore((state) => state.setStatus);
  const prevStatus = usePrevious(status);
  const refStatus = useRef({});

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

  const clearStatus = (key) => {
    if (refStatus.current[key]) {
      const newStatus = { ...refStatus.current };
      delete newStatus[key];
      setStatus(newStatus);
    }
  };

  useEffect(() => {
    refStatus.current = status;
  }, [status]);

  useEffect(() => {
    let cleaners = [];
    forEach(status, (stat, key) => {
      if (stat.status !== prevStatus[key]?.status) {
        if (stat.status === "success" || stat.status === "error") {
          const timeout = setTimeout(() => {
            clearStatus(key);
          }, 5000);
        }
      }
    });
  }, [status, prevStatus]);

  return <div className={styles["overlay"]}>{statusCards}</div>;
};
