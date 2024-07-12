import { createContext, useReducer } from 'react';
import { Layout } from './components/Layout/Layout';
import { reducer } from './state/reducer';
import { initialState } from './state/constants';
import * as actions from './state/constants';
import { Mode, Timer } from './types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const PomodoroContext = createContext<any>(null);

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const contextValue = {
    timer: state.timer,
    mode: state.mode,
    round: state.round,
    autoPlay: state.autoPlay,
    incrementRound: () =>
      dispatch({ type: actions.INCREMENT_ROUND, payload: null }),
    resetRound: () => dispatch({ type: actions.RESET_ROUND, payload: null }),
    setMode: (mode: Mode) =>
      dispatch({ type: actions.SET_MODE, payload: mode }),
    setTimer: (timer: Timer) =>
      dispatch({ type: actions.SET_TIMER, payload: timer }),
    resetTimer: () => dispatch({ type: actions.RESET_TIMER, payload: null }),
    setCountdown: (time: { minutes: number; seconds: number }) =>
      dispatch({ type: actions.SET_COUNTDOWN, payload: time }),
    startTimer: () => dispatch({ type: actions.START_TIMER, payload: null }),
    stopTimer: () => dispatch({ type: actions.STOP_TIMER, payload: null }),
    enableAutoplay: () =>
      dispatch({ type: actions.ENABLE_AUTOPLAY, payload: null }),
    disableAutoplay: () =>
      dispatch({ type: actions.DISABLE_AUTOPLAY, payload: null }),
  };
  return (
    <PomodoroContext.Provider value={contextValue}>
      <Layout />
    </PomodoroContext.Provider>
  );
}

export default App;
