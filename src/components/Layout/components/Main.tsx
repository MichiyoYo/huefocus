/* eslint-disable @typescript-eslint/no-unused-vars */
import styled from 'styled-components';
import { createContext, useState } from 'react';
import { SetButtons } from '../../SetButtons';
import { Timer } from '../../Timer';
import { GoalInput } from '../../GoalInput';
import { Box } from '@chakra-ui/react';
import { ActionButtons } from '../../ActionButtons';

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
        <Box
          maxW='lg'
          minW='sm'
          display='flex'
          flexDirection='column'
          gap={5}
          alignItems='center'
        >
          <GoalInput />
          <SetButtons />
          <Timer />
          <ActionButtons />
        </Box>
      </ModeContext.Provider>
    </MainContainer>
  );
};

export default Main;
