/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box } from '@chakra-ui/react';
import { createContext, useReducer } from 'react';
import { GoalInput } from './GoalInput';
import { ModeButtons } from './ModeButtons';
import { Timer } from './Timer/Timer';
import { ActionButtons } from './ActionButtons';
import { reducer } from '../state/reducer';
import { initialState } from '../state/constants';
import * as actions from '../state/constants';
import { Mode, Timer as TimerType } from '../types';

export const PomodoroContext = createContext<any>(null);

export const Pomodoro = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const contextValue = {
    timer: state.timer,
    mode: state.mode,
    round: state.round,
    incrementRound: () =>
      dispatch({ type: actions.INCREMENT_ROUND, payload: null }),
    resetRound: () => dispatch({ type: actions.RESET_ROUND, payload: null }),
    setMode: (mode: Mode) =>
      dispatch({ type: actions.SET_MODE, payload: mode }),
    setTimer: (timer: TimerType) =>
      dispatch({ type: actions.SET_TIMER, payload: timer }),
    startTimer: () => dispatch({ type: actions.START_TIMER, payload: null }),
    pauseTimer: () => dispatch({ type: actions.PAUSE_TIMER, payload: null }),
    resetTimer: () => dispatch({ type: actions.RESET_TIMER, payload: null }),
    tick: () => dispatch({ type: actions.TICK, payload: null }),
  };

  return (
    <PomodoroContext.Provider value={contextValue}>
      <Box
        maxW='lg'
        minW='sm'
        display='flex'
        flexDirection='column'
        gap={5}
        alignItems='center'
      >
        <GoalInput />
        <ModeButtons />
        {/* <Timer />
        <ActionButtons /> */}
      </Box>
    </PomodoroContext.Provider>
  );
};
