import { Text } from '@chakra-ui/react';
import { timePad } from '../../utils';
import { useCallback, useContext, useEffect } from 'react';
import { PomodoroContext } from '../Pomodoro';

export const Timer = () => {
  const { timer, setCountdown } = useContext(PomodoroContext);
  const { isRunning, timeCap, countDown } = timer;

  const handleTick = useCallback(() => {
    if (countDown.minutes === 0 && countDown.seconds === 0) {
      setCountdown(timeCap);
    } else if (countDown.seconds === 0) {
      setCountdown({ minutes: countDown.minutes - 1, seconds: 59 });
    } else {
      setCountdown({
        minutes: countDown.minutes,
        seconds: countDown.seconds - 1,
      });
    }
  }, [countDown, setCountdown, timeCap]);

  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(handleTick, 1000);
      return () => clearInterval(interval);
    }
  }, [isRunning, handleTick]);

  return (
    <Text
      size='6xl'
      fontSize={['6rem', '8rem', '10rem']}
      fontFamily={'Martian Mono Variable'}
      noOfLines={1}
      color='white'
    >
      {timePad(countDown.minutes)}:{timePad(countDown.seconds)}
    </Text>
  );
};
