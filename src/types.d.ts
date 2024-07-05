export interface Time {
  minutes: number;
  seconds: number;
}

export interface Timer {
  isRunning: boolean;
  type: Mode;
  timeCap: Time;
  countDown: Time;
}

export type Mode = 'focus' | 'shortBreak' | 'longBreak';

export type Round = 1 | 2 | 3 | 4;
