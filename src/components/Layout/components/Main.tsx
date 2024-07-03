/* eslint-disable @typescript-eslint/no-unused-vars */
import styled from 'styled-components';
import { createContext, useState } from 'react';
import { SetButtons } from '../../SetButtons';
import { Timer } from '../../Timer';

const MainContainer = styled.main`
  flex: 3 1 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ModeContext = createContext<{
  mode: string;
  setMode: React.Dispatch<React.SetStateAction<string>>;
}>({
  mode: '',
  setMode: () => {},
});

const Main = () => {
  const [mode, setMode] = useState('focus');

  return (
    <MainContainer>
      <ModeContext.Provider value={{ mode, setMode }}>
        <SetButtons />
        <Timer />
      </ModeContext.Provider>
    </MainContainer>
  );
};

export default Main;
