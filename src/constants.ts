import { Timer } from './types';

export const DEFAULT_TIMER: Timer = {
  isRunning: false,
  timeCap: { minutes: 25, seconds: 0 },
  type: 'focus' as const,
};
