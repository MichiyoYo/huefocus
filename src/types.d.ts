export interface Time {
  minutes: number;
  seconds: number;
}

export interface Timer {
  isRunning: boolean;
  type: 'focus' | 'shortBreak' | 'longBreak';
  timeCap?: Time;
}
