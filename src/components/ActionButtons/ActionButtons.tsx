import { Button, HStack } from '@chakra-ui/react';
import { LuRewind, LuPlay, LuPause } from 'react-icons/lu';
import { useCallback, useContext } from 'react';
import { PomodoroContext } from '../Pomodoro';

export const ActionButtons = () => {
  const { timer, setTimer, resetTimer } = useContext(PomodoroContext);

  const handleStart = useCallback(() => {
    if (timer.isRunning) {
      setTimer({ ...timer, isRunning: false });
    } else {
      setTimer({ ...timer, isRunning: true });
    }
  }, [setTimer, timer]);

  return (
    <HStack spacing='24px'>
      <Button
        variant='solid'
        colorScheme='whiteAlpha'
        size='md'
        onClick={handleStart}
        leftIcon={timer?.isRunning ? <LuPause /> : <LuPlay />}
      >
        {timer.isRunning ? 'Pause' : 'Start'}
      </Button>
      <Button
        variant='solid'
        colorScheme='whiteAlpha'
        size='md'
        onClick={resetTimer}
        leftIcon={<LuRewind />}
      >
        Rewind
      </Button>
    </HStack>
  );
};
