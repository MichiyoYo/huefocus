import { Button, HStack } from '@chakra-ui/react';
import { LuRewind, LuPlay, LuPause } from 'react-icons/lu';
import { Timer } from '../../types';

interface Props {
  timer: Timer;
  setTimer: React.Dispatch<React.SetStateAction<Timer>>;
}

export const ActionButtons = ({ timer, setTimer }: Props) => {
  const handleStart = () => {
    if (timer.isRunning) {
      setTimer((prev) => ({ ...prev, isRunning: false }));
    } else {
      setTimer((prev) => ({ ...prev, isRunning: true }));
    }
  };

  const handleReset = () => setTimer({ ...timer, isRunning: false });

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
