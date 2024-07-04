import { Stack } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import { Mode, Time, Timer } from '../../types';
import { getDefaultTimer } from '../../utils';

interface Props {
  mode: Mode;
  setMode: React.Dispatch<React.SetStateAction<Mode>>;
  setTimer: React.Dispatch<React.SetStateAction<Timer>>;
  setTime: React.Dispatch<React.SetStateAction<Time>>;
}

export const ModeButtons = ({ mode, setMode, setTimer, setTime }: Props) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const id = e.currentTarget.id;
    setMode(id as Mode);
    const timer = getDefaultTimer(id as Mode);
    setTimer(timer);
    setTime(timer.timeCap);
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
