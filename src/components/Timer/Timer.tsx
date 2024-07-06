import { Text } from '@chakra-ui/react';
import {
  getDefaultTimer,
  getNextMode,
  isTimerExpired,
  timePad,
} from '../../utils';
import { useCallback, useContext, useEffect } from 'react';
import { PomodoroContext } from '../Pomodoro';
import { FOCUS_TIMER, TOTAL_ROUNDS } from '../../constants';

export const Timer = () => {
  const { timer, round, setCountdown, incrementRound, setTimer, startTimer } =
    useContext(PomodoroContext);
  const { isRunning, countDown, mode } = timer;

  const handleTick = useCallback(() => {
    if (timer && round <= TOTAL_ROUNDS) {
      if (!isTimerExpired(timer)) {
        if (countDown.seconds === 0)
          setCountdown({ minutes: countDown.minutes - 1, seconds: 59 });
        else
          setCountdown({
            minutes: countDown.minutes,
            seconds: countDown.seconds - 1,
          });
      } else {
        incrementRound();
        const nextMode = getNextMode(mode, round + 1);
        setTimer(getDefaultTimer(nextMode));
        startTimer();
      }
    } else {
      setTimer(FOCUS_TIMER);
    }
  }, [
    countDown,
    setCountdown,
    round,
    incrementRound,
    timer,
    mode,
    setTimer,
    startTimer,
  ]);

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
