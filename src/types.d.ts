export interface Time {
  minutes: number;
  seconds: number;
}

export interface Timer {
  isRunning: boolean;
  type: Mode;
  timeCap: Time;
}

export type Mode = 'focus' | 'shortBreak' | 'longBreak';
