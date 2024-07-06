import { ActionType, StateType } from './types';
import * as actions from './constants';

export const reducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case actions.INCREMENT_ROUND:
      return { ...state, round: state.round + 1 };
    case actions.RESET_ROUND:
      return { ...state, round: 1 };
    case actions.SET_MODE:
      return { ...state, mode: action.payload };
    case actions.SET_TIMER:
      return { ...state, timer: action.payload };
    case actions.RESET_TIMER:
      return {
        ...state,
        timer: {
          ...state.timer,
          isRunning: false,
          countDown: state.timer.timeCap,
        },
      };
    case actions.START_TIMER:
      return { ...state, timer: { ...state.timer, isRunning: true } };
    case actions.STOP_TIMER:
      return { ...state, timer: { ...state.timer, isRunning: false } };
    case actions.SET_COUNTDOWN:
      return {
        ...state,
        timer: {
          ...state.timer,
          countDown: action.payload,
        },
      };
    case actions.ENABLE_AUTOPLAY:
      return {
        ...state,
        autoPlay: true,
      };
    case actions.DISABLE_AUTOPLAY:
      return {
        ...state,
        autoPlay: false,
      };
    default:
      return state;
  }
};
