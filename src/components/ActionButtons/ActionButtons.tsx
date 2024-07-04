import { Button, HStack } from '@chakra-ui/react';
import { LuRewind, LuPlay, LuPause } from 'react-icons/lu';
import { Time, Timer } from '../../types';
import { getDefaultTimer } from '../../utils';
import { useCallback } from 'react';

interface Props {
  timer: Timer;
  setTimer: React.Dispatch<React.SetStateAction<Timer>>;
  setTime: React.Dispatch<React.SetStateAction<Time>>;
}

export const ActionButtons = ({ timer, setTimer, setTime }: Props) => {
  const handleStart = () => {
    setTimer((prev) => ({ ...prev, isRunning: !prev.isRunning }));
  };

  const handleReset = useCallback(() => {
    setTimer(getDefaultTimer(timer.type));
    setTime(timer.timeCap);
  }, [timer, setTimer, setTime]);

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
        onClick={handleReset}
        leftIcon={<LuRewind />}
      >
        Rewind
      </Button>
    </HStack>
  );
};
