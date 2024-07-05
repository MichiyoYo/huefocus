import { FOCUS_TIMER } from '../constants';

export const INCREMENT_ROUND = 'INCREMENT_ROUND';
export const RESET_ROUND = 'RESET_ROUND';
export const SET_TIMER = 'SET_TIMER';
export const SET_MODE = 'SET_MODE';
export const RESET_TIMER = 'RESET_TIMER';
export const SET_COUNTDOWN = 'SET_COUNTDOWN';

export const initialState = {
  timer: FOCUS_TIMER,
  mode: 'focus',
  round: 1,
};
