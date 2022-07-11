import { Time } from './types';

export const calculateInitialTime = ({
  days,
  hours,
  minutes,
  seconds,
}: Time): number => {
  const intialDays = days * 60 * 60 * 24 * 1000;
  const initialHours = hours * 60 * 60 * 1000;
  const initialMinutes = minutes * 60 * 1000;
  const initialSeconds = seconds * 1000;
  const initialTime =
    intialDays + initialHours + initialMinutes + initialSeconds;

  return initialTime;
};
export const calculateRemainingDays = (remainingTime: number): number =>
  Math.floor(remainingTime / (60 * 60 * 24 * 1000));

export const calculateRemainingHours = (remainingTime: number): number =>
  Math.floor(remainingTime / (60 * 60 * 1000));

export const calculateRemainingMinutes = (remainingTime: number): number =>
  Math.floor(remainingTime / (60 * 1000));

export const calculateRemainingSeconds = (remainingTime: number): number =>
  Math.floor((remainingTime / 1000) % 60);
