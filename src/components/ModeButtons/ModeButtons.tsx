/* eslint-disable react-hooks/exhaustive-deps */
import { Stack } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import { Mode } from '../../types';
import { getTimerDuration } from '../../utils';
import { useContext, useEffect } from 'react';
import { PomodoroContext } from '../../App';
import { useViewport } from '../../hooks';

export const ModeButtons = () => {
  const { timer, setMode, setTimer, mode } = useContext(PomodoroContext);
  const { width: vpWidth } = useViewport();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const id = e.currentTarget.id;
    setMode(id as Mode);
    const timer = getTimerDuration(id as Mode);
    setTimer(timer);
  };

  useEffect(() => {
    if (timer && setMode) {
      setMode(timer.mode);
    }
  }, [timer]);

  return (
    <Stack
      direction={vpWidth < 300 ? 'column' : 'row'}
      spacing={vpWidth <= 300 ? 2 : 5}
    >
      <Button
        variant='solid'
        colorScheme='whiteAlpha'
        onClick={handleClick}
        id='focus'
        isActive={mode === 'focus'}
      >
        Focus
      </Button>
      <Button
        variant='solid'
        colorScheme='whiteAlpha'
        onClick={handleClick}
        id='shortBreak'
        isActive={mode === 'shortBreak'}
      >
        Short Break
      </Button>
      <Button
        variant='solid'
        colorScheme='whiteAlpha'
        onClick={handleClick}
        id='longBreak'
        isActive={mode === 'longBreak'}
      >
        Long Break
      </Button>
    </Stack>
  );
};
