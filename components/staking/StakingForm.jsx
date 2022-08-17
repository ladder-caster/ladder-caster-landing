import React, {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
} from "react";
import styles from "../../styles/Staking.module.css";
import { updateData, useWalletStore } from "../../zustand";
import { StakingContext } from "../../wallet/StakingContext";

export const StakingForm = ({}) => {
  const [ladaToStake, setLadaToStake] = useState("");
  const [accountSelected, setAccountSelected] = useState(0);
  const [ladaToRedeem, setLadaToRedeem] = useState(0);
  const [totalStaked, setTotalStaked] = useState(0);
  const ladaBalance = useWalletStore((state) => state.ladaBalance);
  const chainClock = useWalletStore((state) => state.chainClock);
  const client = useWalletStore((state) => state.client);
  const status = useWalletStore((state) => state.status);
  const refStatus = useRef({});
  const setStatus = useWalletStore((state) => state.setStatus);
  const category = useWalletStore((state) => state.category);
  const stakingContracts = useWalletStore((state) => state.stakingContracts);
  const userStakedAccounts = useWalletStore(
    (state) => state.userStakedAccounts
  );

  const color = useMemo(() => {
    switch (category) {
      case 1: {
        return "blue";
      }
      case 2: {
        return "purple";
      }
      case 3: {
        return "orange";
      }
    }
  }, [category]);

  const handleInputChange = (event) => {
    const floatValue = parseFloat(event.target.value);
    if (floatValue > 0 && !isNaN(floatValue)) {
      setLadaToStake(floatValue);
    } else if (
      (event.target.value === "." ||
        event.target.value.includes("0.") ||
        event.target.value === "0") &&
      !/[a-zA-Z]/.test(event.target.value)
    ) {
      setLadaToStake(event.target.value);
    } else if (event.target.value === "") {
      setLadaToStake(event.target.value);
    }
  };

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

  const stakeLada = async () => {
    let error = "";
    if (ladaToStake <= 0) return;
    if (ladaToStake > ladaBalance) {
      changeStatus("stake", "error", "Can't stake more that your balance.");
      return;
    }

    try {
      changeStatus("stake", "loading", "Staking...");
      await client.connection.confirmTransaction(
        await new StakingContext(client).stakeLADA(ladaToStake, category)
      );
      changeStatus("stake", "success", "Staking successfully!");
    } catch (e) {
      let errorMessage;
      if (typeof e === "string") errorMessage = e;
      else errorMessage = e.message;
      changeStatus("stake", "error", errorMessage);
    } finally {
      updateData(client);
    }
  };

  const unstakeLada = async () => {
    try {
      changeStatus("unstake", "loading", "Unstaking...");
      const stakingContractPK = StakingContext.getTier(category);
      await client.connection.confirmTransaction(
        await new StakingContext(client).unstakeLADA(
          userStakedAccounts.filter((acc) => {
            return (
              acc.stakingContract.toString() === stakingContractPK.toString()
            );
          })[accountSelected]
        )
      );
      changeStatus("unstake", "success", "Unstaking successful!");
    } catch (e) {
      let errorMessage;
      if (typeof e === "string") errorMessage = e;
      else errorMessage = e.message;
      changeStatus("unstake", "error", errorMessage);
    } finally {
      updateData(client);
    }
  };

  const redeemLada = async () => {
    if (ladaToRedeem <= 0) return;

    try {
      //TODO: fix
      changeStatus("claim", "loading", "Claiming...");
      const stakingContractPK = StakingContext.getTier(category);
      await new StakingContext(client).bulkClaim(
        userStakedAccounts.filter((acc) => {
          return (
            acc.stakingContract.toString() === stakingContractPK.toString()
          );
        })
      );
      changeStatus("claim", "success", "Claiming successful!");
    } catch (e) {
      let errorMessage;
      if (typeof e === "string") errorMessage = e;
      else errorMessage = e.message;
      changeStatus("claim", "error", errorMessage);
    } finally {
      updateData(client);
    }
  };

  const maxInput = () => {
    if (ladaToStake < ladaBalance) {
      setLadaToStake(ladaBalance);
    }
  };

  const handleDropdown = (event) => {
    setAccountSelected(event.target.value);
  };

  const calcRedeemAmount = useCallback(() => {
    let toClaim = 0,
      totStaked = 0;
    const stakingContractPK = StakingContext.getTier(category);
    const contractObj = stakingContracts.find(
      (contract) =>
        contract.publicKey.toString() === stakingContractPK.toString()
    );

    if (!contractObj) return;

    userStakedAccounts
      .filter((acc) => {
        return acc.stakingContract.toString() === stakingContractPK.toString();
      })
      .forEach((acc) => {
        const apyPerSec = contractObj.apy / 100 / 31536000;
        const localTimeGap = new Date().getTime() / 1000 - chainClock.locale;

        const ellapsedSeconds = Math.trunc(
          chainClock.chain + localTimeGap - acc.lastClaimed.toNumber()
        );

        toClaim +=
          (acc.stakedAmount.toNumber() / 1e9) * apyPerSec * ellapsedSeconds;
        totStaked += acc.stakedAmount.toNumber() / 1e9;
      });

    setTotalStaked(totStaked);

    toClaim = toClaim.toFixed(4);
    return toClaim;
  }, [category, userStakedAccounts, stakingContracts]);

  useEffect(() => {
    refStatus.current = status;
  }, [status]);

  useEffect(() => {
    let timeout;
    if (userStakedAccounts?.length && category && stakingContracts?.length) {
      setLadaToRedeem(calcRedeemAmount());

      timeout = setInterval(() => {
        setLadaToRedeem(calcRedeemAmount());
      }, 10000);
    }

    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [category, userStakedAccounts, stakingContracts]);

  const options = useMemo(() => {
    let list = [];

    const stakingContractPK = StakingContext.getTier(category);
    userStakedAccounts
      .filter((acc) => {
        return acc.stakingContract.toString() === stakingContractPK.toString();
      })
      .forEach((acc, key) => {
        list.push({
          label: `Account ${key + 1} - ${acc.stakedAmount / 1e9} LADA`,
          value: key,
        });
      });

    return list;
  }, [userStakedAccounts, category]);

  const [unstakeDisabled, remainingDays] = useMemo(() => {
    const stakingContractPK = StakingContext.getTier(category);
    const user = userStakedAccounts[accountSelected];
    const contractObj = stakingContracts.find(
      (contract) =>
        contract.publicKey.toString() === stakingContractPK.toString()
    );

    if (user) {
      let disabled = true,
        remainingString = "";
      if (contractObj.lockPeriodInSeconds !== 0) {
        const lockInSecs = contractObj.lockPeriodInSeconds;
        const stakedSecs = new Date().getTime() / 1000 - user.stakedStartTime;

        if (stakedSecs < lockInSecs) {
          const remainingSecs = lockInSecs - stakedSecs;

          if (remainingSecs > 86400) {
            const days = Math.trunc(remainingSecs / 86400);
            remainingString = `${days} day${days !== 0 ? "s" : ""} left`;
          } else if (remainingSecs > 3600) {
            const hours = Math.trunc(remainingSecs / 3600);
            remainingString = `${hours} hour${hours !== 0 ? "s" : ""} left`;
          } else if (remainingSecs > 60) {
            const minutes = Math.trunc(remainingSecs / 3600);
            remainingString = `${minutes} min left`;
          }
        } else {
          disabled = false;
        }
      } else {
        disabled = false;
      }

      return [disabled, remainingString];
    }

    return [true, null];
  }, [accountSelected, stakingContracts, userStakedAccounts, category]);

  return (
    <div id="modal" className={styles["staking-modal-container"]}>
      <div className={`${styles["staking-modal"]}`}>
        <div className={`${styles["staking-modal-title"]} ${styles[color]}`}>
          Stake
        </div>
        <div className={styles["input-container"]}>
          <div className={styles["value-container"]}>
            <img src="LADA.png" className={styles["icon"]} />
            <input
              className={styles["input"]}
              placeholder="Amount"
              value={ladaToStake}
              onChange={handleInputChange}
            />
            <div className={styles["max-button"]} onClick={maxInput}>
              MAX
            </div>
          </div>
          <button
            className={`${styles["button"]}`}
            disabled={ladaBalance <= 0 || !client}
            onClick={stakeLada}
          >
            Stake
          </button>
        </div>
        <div className={styles["detail-segment"]}>
          <div className={styles["row"]}>
            <div className={`${styles["info"]} ${styles["spread"]}`}>
              <div className={styles["text"]}>LADA Earned</div>
              <div className={styles["text"]}>{ladaToRedeem}</div>
            </div>
            <div className={styles["info"]}>
              <button
                className={styles["button"]}
                disabled={ladaToRedeem <= 0}
                onClick={redeemLada}
              >
                Claim
              </button>
            </div>
          </div>
          <div className={`${styles["row"]} ${styles["top"]}`}>
            <div className={`${styles["info"]} ${styles["spread"]}`}>
              <div className={`${styles["text"]} ${styles[color]}`}>
                Total Staked
              </div>
              <div className={`${styles["text"]} ${styles[color]}`}>
                {totalStaked?.toLocaleString()}
              </div>
            </div>
          </div>
          <div className={styles["row"]}>
            {options?.length ? (
              <>
                <div className={styles["info"]}>
                  <Dropdown
                    options={options}
                    value={accountSelected}
                    onChange={handleDropdown}
                  />
                </div>

                <div className={styles["info"]}>
                  <div className={styles["text"] + " " + styles["duration"]}>
                    {remainingDays}
                  </div>
                  <button
                    className={styles["button"]}
                    disabled={unstakeDisabled}
                    onClick={unstakeLada}
                  >
                    Unstake
                  </button>
                </div>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

const Dropdown = ({ value, options, onChange }) => {
  return (
    <div className={styles["select-container"]}>
      <select className={styles["select"]} value={value} onChange={onChange}>
        {options.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
    </div>
  );
};
