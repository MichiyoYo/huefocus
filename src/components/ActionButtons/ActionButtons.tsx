import { Button, HStack } from '@chakra-ui/react';
import { LuRewind, LuPlay, LuPause } from 'react-icons/lu';
import { useCallback, useContext } from 'react';
import { PomodoroContext } from '../Pomodoro';
import { MdAutoAwesome } from 'react-icons/md';

export const ActionButtons = () => {
  const {
    autoPlay,
    enableAutoplay,
    disableAutoplay,
    timer,
    startTimer,
    stopTimer,
    resetTimer,
  } = useContext(PomodoroContext);

  const handleStart = useCallback(() => {
    if (timer.isRunning) {
      stopTimer();
    } else {
      startTimer();
    }
  }, [startTimer, stopTimer, timer]);

  const toggleAutoplay = useCallback(() => {
    if (autoPlay) disableAutoplay();
    else enableAutoplay();
  }, [autoPlay, enableAutoplay, disableAutoplay]);

  return (
    <HStack spacing='5'>
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
      <Button
        variant='solid'
        colorScheme='whiteAlpha'
        size='md'
        onClick={toggleAutoplay}
        isActive={autoPlay}
        leftIcon={<MdAutoAwesome />}
      >
        Auto-Play
      </Button>
    </HStack>
  );
};
