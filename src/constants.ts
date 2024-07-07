import { Timer } from './types';

const FOCUS_TIMECAP = { minutes: 0, seconds: 5 };
const SHORT_BREAK_TIMECAP = { minutes: 0, seconds: 3 };
const LONG_BREAK_TIMECAP = { minutes: 0, seconds: 4 };

export const FOCUS_TIMER: Timer = {
  isRunning: false,
  timeCap: FOCUS_TIMECAP,
  mode: 'focus' as const,
  countDown: FOCUS_TIMECAP,
};

export const SHORT_BREAK_TIMER: Timer = {
  isRunning: false,
  timeCap: SHORT_BREAK_TIMECAP,
  mode: 'shortBreak' as const,
  countDown: SHORT_BREAK_TIMECAP,
};

export const LONG_BREAK_TIMER: Timer = {
  isRunning: false,
  timeCap: LONG_BREAK_TIMECAP,
  mode: 'longBreak' as const,
  countDown: LONG_BREAK_TIMECAP,
};

export const TOTAL_ROUNDS = 8;
