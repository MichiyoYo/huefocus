import { createContext, useReducer } from 'react';
import { Layout } from './components/Layout/Layout';
import { reducer } from './state/reducer';
import { initialState } from './state/constants';
import { getContextValue } from './state/context';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const PomodoroContext = createContext<any>(null);

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const contextValue = getContextValue(state, dispatch);
  return (
    <PomodoroContext.Provider value={contextValue}>
      <Layout />
    </PomodoroContext.Provider>
  );
}

export default App;
