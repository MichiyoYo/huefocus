import { Timer } from './types';

const FOCUS_TIMECAP = { minutes: 25, seconds: 0 };
const SHORT_BREAK_TIMECAP = { minutes: 5, seconds: 0 };
const LONG_BREAK_TIMECAP = { minutes: 10, seconds: 0 };

export const FOCUS_TIMER: Timer = {
  isRunning: false,
  timeCap: FOCUS_TIMECAP,
  type: 'focus' as const,
  countDown: FOCUS_TIMECAP,
};

export const SHORT_BREAK_TIMER: Timer = {
  isRunning: false,
  timeCap: SHORT_BREAK_TIMECAP,
  type: 'shortBreak' as const,
  countDown: SHORT_BREAK_TIMECAP,
};

export const LONG_BREAK_TIMER: Timer = {
  isRunning: false,
  timeCap: LONG_BREAK_TIMECAP,
  type: 'longBreak' as const,
  countDown: LONG_BREAK_TIMECAP,
};
