import { useContext, useState } from 'react';
import { Time } from '../../types';
import { Heading, Text } from '@chakra-ui/react';
import { ModeContext } from '../Layout/components/Main';

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

  const timePad = (time: number) => {
    const timeString = time.toString();
    return timeString.length < 2 ? timeString.padStart(2, '0') : timeString;
  };

  return (
    <div>
      <Heading>
        <Text fontSize='6xl' color='white' my={5}>
          {mode === 'focus' &&
            `${timePad(focusTimer.minutes)}:${timePad(focusTimer.seconds)}`}
          {mode === 'short-break' &&
            `${timePad(shortBreakTimer.minutes)}:${timePad(
              shortBreakTimer.seconds
            )}`}
          {mode === 'long-break' &&
            `${timePad(longBreakTimer.minutes)}:${timePad(
              longBreakTimer.seconds
            )}`}
        </Text>
      </Heading>
    </div>
  );
};
