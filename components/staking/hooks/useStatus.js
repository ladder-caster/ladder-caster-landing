import { useCallback, useRef } from "react";
import { useWalletStore } from "../../../zustand";

const useStatus = () => {
  const status = useWalletStore((state) => state.status);
  const setStatus = useWalletStore((state) => state.setStatus);
  const refStatus = useRef(status);

  const changeStatus = useCallback(
    (type, statusLabel, message) => {
      setStatus({
        ...refStatus.current,
        [type]: {
          status: statusLabel,
          message: message,
        },
      });
    },
    [status]
  );

  return [status, changeStatus];
};

export default useStatus;
