import { useEffect, useRef } from "react";
import { useMemo } from "react";
import { forEach, isEmpty } from "lodash";
import usePrevious from "../staking/hooks/usePrevious";
import {
  _card,
  _cardInfo,
  _cardIcon,
  _iconStatus,
  _overlay,
} from "../../styles/status.styled";
import { useMesh } from "../../core/state/mesh/useMesh";
import { STATUS_REF } from "../../core/actions/actions";

const StatusRef = () => {
  //Obj format: { status: 'loading', message: ''}
  const [status, setStatus] = useMesh(STATUS_REF);
  const prevStatus = usePrevious(status);
  const refStatus = useRef({});

  const statusCards = useMemo(() => {
    if (!isEmpty(status)) {
      let list = [];

      forEach(status, (item, key) => {
        list.push(
          <_card
            key={`${key}-status`}
            onClick={() => {
              const newStatus = { ...status };
              delete newStatus[key];
              setStatus(newStatus);
            }}
            $large
          >
            <_cardIcon>
              <_iconStatus $item={item.status} />
            </_cardIcon>
            <_cardInfo>{item.message}</_cardInfo>
          </_card>
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
      if (stat.status !== prevStatus?.[key]?.status) {
        if (stat.status === "success" || stat.status === "error") {
          cleaners.push(
            setTimeout(() => {
              clearStatus(key);
            }, 5000)
          );
        }
      }
    });

    // return () => {
    //   forEach(cleaners, (timeoutId) => clearTimeout(timeoutId));
    // };
  }, [status, prevStatus]);

  return <_overlay>{statusCards}</_overlay>;
};

export default StatusRef;
