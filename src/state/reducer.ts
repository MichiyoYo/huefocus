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
    case actions.SET_COUNTDOWN:
      return {
        ...state,
        timer: {
          ...state.timer,
          countDown: action.payload,
        },
      };
    default:
      return state;
  }
};
