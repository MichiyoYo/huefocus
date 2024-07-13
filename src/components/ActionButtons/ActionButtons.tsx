import { Button, HStack, IconButton, Tooltip } from '@chakra-ui/react';
import { LuPlay, LuPause } from 'react-icons/lu';
import { useCallback, useContext } from 'react';
import { MdAutoAwesome } from 'react-icons/md';
import { LuTimerReset } from 'react-icons/lu';
import { PomodoroContext } from '../../App';
import { useViewport } from '../../hooks';
import { FaPlay, FaPause } from 'react-icons/fa6';

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
  const { width: vpWidth } = useViewport();

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

  return vpWidth && vpWidth > 300 ? (
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
        leftIcon={<LuTimerReset />}
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
        {autoPlay ? 'Auto-play On' : 'Auto-play Off'}
      </Button>
    </HStack>
  ) : (
    <HStack spacing='2'>
      <Tooltip label='Start/Pause'>
        <IconButton
          isRound
          aria-label='Start/Pause'
          colorScheme='whiteAlpha'
          onClick={handleStart}
          icon={timer?.isRunning ? <FaPause /> : <FaPlay />}
        />
      </Tooltip>
      <Tooltip label='Rewind'>
        <IconButton
          isRound
          aria-label='Start/Pause'
          colorScheme='whiteAlpha'
          onClick={resetTimer}
          icon={<LuTimerReset />}
        />
      </Tooltip>
      <Tooltip label='Autoplay'>
        <IconButton
          isRound
          aria-label='Start/Pause'
          colorScheme='whiteAlpha'
          isActive={autoPlay}
          onClick={toggleAutoplay}
          icon={<MdAutoAwesome />}
        />
      </Tooltip>
    </HStack>
  );
};
