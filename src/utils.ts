import { FOCUS_TIMER, LONG_BREAK_TIMER, SHORT_BREAK_TIMER } from './constants';

export const timePad = (time: number) => {
  const timeString = time.toString();
  return timeString.length < 2 ? timeString.padStart(2, '0') : timeString;
};

export const getDefaultTimer = (type: 'focus' | 'shortBreak' | 'longBreak') => {
  switch (type) {
    case 'focus':
      return FOCUS_TIMER;
    case 'shortBreak':
      return SHORT_BREAK_TIMER;
    case 'longBreak':
      return LONG_BREAK_TIMER;
  }
};
