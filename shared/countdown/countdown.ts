import { format as formatTime, intervalToDuration } from 'date-fns';
import { useEffect, useRef, useState } from 'react';

import {
  calculateInitialTime,
  calculateRemainingDays,
  calculateRemainingHours,
  calculateRemainingMinutes,
  calculateRemainingSeconds,
} from './time';
import { Countdown } from './types';

type useCountdownParams = {
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
  format?: string;
  interval?: Duration;
  onCompleted?: VoidFunction;
};

/**
 * @name useCountdown
 * @description React hook countdown timer.
 */
const useCountdown = ({
  days = 0,
  hours = 0,
  minutes = 0,
  seconds = 0,
  format = 'dd:hh:mm:ss',
  onCompleted,
}: useCountdownParams = {}): Countdown => {
  const id = useRef(0);

  // time
  const [remainingTime, setRemainingTime] = useState(
    calculateInitialTime({ days, hours, minutes, seconds }),
  );

  // status
  const [isActive, setIsActive] = useState(false);
  const [isInactive, setIsInactive] = useState(true);
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(
    () => {
      id.current = window.setInterval(calculateRemainingTime, 1000);

      setIsActive(true);
      setIsInactive(false);
      setIsRunning(true);
      setIsPaused(false);

      return () => window.clearInterval(id.current);
    },

    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  const calculateRemainingTime = () => {
    setRemainingTime((time) => {
      if (time - 1000 <= 0) {
        clearInterval(id.current);
        onCompleted?.();

        setIsActive(false);
        setIsInactive(true);
        setIsRunning(false);
        setIsPaused(false);

        return 0;
      }

      return time - 1000;
    });
  };

  const endDate = new Date("2022-10-15T18:00:00.000Z");

  const date = new Date(); 
  const now_utc =  Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(),
                    date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds());
  const end_utc =  Date.UTC(endDate.getUTCFullYear(), endDate.getUTCMonth(), endDate.getUTCDate(),
                    endDate.getUTCHours(), endDate.getUTCMinutes(), endDate.getUTCSeconds());

  const countdown: Countdown = {
    days: calculateRemainingDays(remainingTime),
    hours: calculateRemainingHours(remainingTime),
    minutes: calculateRemainingMinutes(remainingTime),
    seconds: calculateRemainingSeconds(remainingTime),
    formatted: formatTime(remainingTime, format),
    interval: intervalToDuration({
      start: new Date(now_utc),
      end: new Date(end_utc)
    }),
    isActive,
    isInactive,
    isRunning,
    isPaused,
  };

  return countdown;
};

export default useCountdown;
