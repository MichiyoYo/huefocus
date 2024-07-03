import styled from 'styled-components';
import { useState } from 'react';
import { SetButtons } from '../../SetButtons';
import { Timer } from '../../Timer';
import { GoalInput } from '../../GoalInput';
import { Box } from '@chakra-ui/react';
import { ActionButtons } from '../../ActionButtons';
import { Timer as TimerType } from '../../../types';
import { DEFAULT_TIMER } from '../../../constants';

const MainContainer = styled.main`
  flex: 3 1 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Main = () => {
  const [timer, setTimer] = useState<TimerType>(DEFAULT_TIMER);

  return (
    <MainContainer>
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
        <Timer timer={timer} />

        <ActionButtons timer={timer} setTimer={setTimer} />
      </Box>
    </MainContainer>
  );
};

export default Main;
