import {
  FOCUS_TIMER,
  LONG_BREAK_TIMER,
  SHORT_BREAK_TIMER,
  TOTAL_ROUNDS,
} from './constants';
import { Mode, Round, Time, Timer } from './types';

export const timePad = (time: number) => {
  const timeString = time.toString();
  return timeString.length < 2 ? timeString.padStart(2, '0') : timeString;
};

export const getTimerDuration = (
  type: 'focus' | 'shortBreak' | 'longBreak'
) => {
  switch (type) {
    case 'focus':
      return FOCUS_TIMER;
    case 'shortBreak':
      return SHORT_BREAK_TIMER;
    case 'longBreak':
      return LONG_BREAK_TIMER;
  }
};

export const isTimerExpired = (timer: Timer) =>
  timer.countDown.minutes === 0 && timer.countDown.seconds === 0;

export const getNextMode = (currMode: Mode, round: Round) => {
  if (round >= TOTAL_ROUNDS && currMode === 'longBreak') return 'focus';
  if (round < TOTAL_ROUNDS) {
    return currMode === 'focus' ? 'shortBreak' : 'focus';
  } else {
    return 'longBreak';
  }
};

export const getUpdatedCountdown = (
  currTime: Time,
  setCountdown: (time: Time) => Time
) => {
  if (currTime.seconds === 0)
    setCountdown({ minutes: currTime.minutes - 1, seconds: 59 });
  else
    setCountdown({
      minutes: currTime.minutes,
      seconds: currTime.seconds - 1,
    });
};
