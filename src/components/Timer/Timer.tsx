import { Text } from '@chakra-ui/react';
import { Time, Timer as TimerType } from '../../types';
import { timePad } from '../../utils';
import { useCallback, useEffect } from 'react';

interface Props {
  timer: TimerType;
  time: Time;
  setTime: React.Dispatch<React.SetStateAction<Time>>;
}

export const Timer = ({ timer, time, setTime }: Props) => {
  const { isRunning, timeCap } = timer;

  const handleTick = useCallback(() => {
    if (time.minutes === 0 && time.seconds === 0) {
      setTime(timeCap);
    } else if (time.seconds === 0) {
      setTime({ minutes: time.minutes - 1, seconds: 59 });
    } else {
      setTime({ minutes: time.minutes, seconds: time.seconds - 1 });
    }
  }, [time, timeCap, setTime]);

  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(handleTick, 1000);
      return () => clearInterval(interval);
    }
  }, [isRunning, handleTick]);

  return (
    <Text
      size='6xl'
      fontSize='8rem'
      fontFamily={'Martian Mono Variable'}
      noOfLines={1}
      color='white'
    >
      {timePad(time.minutes)}:{timePad(time.seconds)}
    </Text>
  );
};
