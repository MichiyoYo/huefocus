/* eslint-disable react-hooks/exhaustive-deps */
import { HStack } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import { Mode } from '../../types';
import { getTimerDuration } from '../../utils';
import { useContext, useEffect } from 'react';
import { PomodoroContext } from '../../App';

export const ModeButtons = () => {
  const { timer, setMode, setTimer, mode } = useContext(PomodoroContext);
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
    <HStack direction='row' align='center' spacing='5' wrap='wrap'>
      <Button
        variant='solid'
        colorScheme='whiteAlpha'
        size='md'
        onClick={handleClick}
        id='focus'
        isActive={mode === 'focus'}
      >
        Focus
      </Button>
      <Button
        variant='solid'
        colorScheme='whiteAlpha'
        size='md'
        onClick={handleClick}
        id='shortBreak'
        isActive={mode === 'shortBreak'}
      >
        Short Break
      </Button>
      <Button
        variant='solid'
        colorScheme='whiteAlpha'
        size='md'
        onClick={handleClick}
        id='longBreak'
        isActive={mode === 'longBreak'}
      >
        Long Break
      </Button>
    </HStack>
  );
};
