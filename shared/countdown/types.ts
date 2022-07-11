/**
 * @name Time
 * @description Time as minutes and seconds.
 */
export type Time = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

/**
 * @name Countdown
 * @description State of the countdown timer.
 */
export type Countdown = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  formatted: string;
  isActive: boolean;
  isInactive: boolean;
  isRunning: boolean;
  isPaused: boolean;
  interval?: Duration;
};
