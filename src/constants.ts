import { Timer } from './types';

export const FOCUS_TIMER: Timer = {
  isRunning: false,
  timeCap: { minutes: 25, seconds: 0 },
  type: 'focus' as const,
};

export const SHORT_BREAK_TIMER: Timer = {
  isRunning: false,
  timeCap: { minutes: 5, seconds: 0 },
  type: 'shortBreak' as const,
};

export const LONG_BREAK_TIMER: Timer = {
  isRunning: false,
  timeCap: { minutes: 10, seconds: 0 },
  type: 'longBreak' as const,
};
