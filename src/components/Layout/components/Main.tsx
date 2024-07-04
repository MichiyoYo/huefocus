import styled from 'styled-components';
import { useState } from 'react';

import { Timer } from '../../Timer';
import { GoalInput } from '../../GoalInput';
import { Box } from '@chakra-ui/react';
import { ActionButtons } from '../../ActionButtons';
import { Mode as ModeType, Timer as TimerType } from '../../../types';
import { FOCUS_TIMER } from '../../../constants';
import { ModeButtons } from '../../SetButtons';

const MainContainer = styled.main`
  flex: 3 1 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Main = () => {
  const [timer, setTimer] = useState<TimerType>(FOCUS_TIMER);
  const [mode, setMode] = useState<ModeType>('focus');
  const [time, setTime] = useState({ minutes: 25, seconds: 0 });

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
        <ModeButtons
          mode={mode}
          setMode={setMode}
          setTimer={setTimer}
          setTime={setTime}
        />
        <Timer timer={timer} time={time} setTime={setTime} />
        <ActionButtons timer={timer} setTimer={setTimer} setTime={setTime} />
      </Box>
    </MainContainer>
  );
};

export default Main;
