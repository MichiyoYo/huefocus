import { Stack } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import { Mode } from '../../types';
import { getDefaultTimer } from '../../utils';
import { useContext } from 'react';
import { PomodoroContext } from '../Pomodoro';

export const ModeButtons = () => {
  const { setMode, setTimer, mode } = useContext(PomodoroContext);
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const id = e.currentTarget.id;
    setMode(id as Mode);
    const timer = getDefaultTimer(id as Mode);
    setTimer(timer);
  };

  return (
    <Stack direction='row' align='center' justify='space-between' wrap='wrap'>
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
    </Stack>
  );
};
