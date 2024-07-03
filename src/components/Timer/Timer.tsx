import { useContext, useState } from 'react';
import { Time } from '../../types';
import { Input, Text } from '@chakra-ui/react';
import { ModeContext } from '../Layout/components/Main';
import { EditTimer } from './components/EditTimer';
import { DisplayTimer } from './ViewTimer';
import { timePad } from '../../utils';

interface TimerProps {
  focusDuration?: Time;
  shortBreakDuration?: Time;
  longBreakDuration?: Time;
}

export const Timer = ({
  focusDuration = {
    minutes: 25,
    seconds: 0,
  },
  shortBreakDuration = {
    minutes: 5,
    seconds: 0,
  },
  longBreakDuration = {
    minutes: 10,
    seconds: 0,
  },
}: TimerProps) => {
  const { mode } = useContext(ModeContext);
  const [focusTimer, setFocusTimer] = useState(focusDuration);
  const [shortBreakTimer, setShortBreakTimer] = useState(shortBreakDuration);
  const [longBreakTimer, setLongBreakTimer] = useState(longBreakDuration);

  return (
    <Text
      size='6xl'
      fontSize='8rem'
      fontFamily={'Russo One'}
      noOfLines={1}
      color='white'
    >
      {mode === 'focus' &&
        `${timePad(focusTimer.minutes)}:${timePad(focusTimer.seconds)}`}
      {mode === 'short-break' &&
        `${timePad(shortBreakTimer.minutes)}:${timePad(
          shortBreakTimer.seconds
        )}`}
      {mode === 'long-break' &&
        `${timePad(longBreakTimer.minutes)}:${timePad(longBreakTimer.seconds)}`}
    </Text>
  );
};
