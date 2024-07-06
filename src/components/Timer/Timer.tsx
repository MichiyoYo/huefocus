import { Text } from '@chakra-ui/react';
import {
  getDefaultTimer,
  getNextMode,
  getUpdatedCountdown,
  isTimerExpired,
  timePad,
} from '../../utils';
import { useCallback, useContext, useEffect } from 'react';
import { PomodoroContext } from '../Pomodoro';
import { FOCUS_TIMER, TOTAL_ROUNDS } from '../../constants';
import { useSound } from 'use-sound';
import ding from '../../assets/round.mp3';

export const Timer = () => {
  const {
    timer,
    round,
    setCountdown,
    incrementRound,
    setTimer,
    startTimer,
    resetRound,
    autoPlay,
    resetTimer,
  } = useContext(PomodoroContext);
  const { isRunning, countDown, mode } = timer;
  const [playEndOfRound] = useSound(ding, { volume: 0.25 });

  const handleTick = useCallback(() => {
    if (!isTimerExpired(timer)) {
      getUpdatedCountdown(countDown, setCountdown);
    } else {
      playEndOfRound();
      resetTimer();
    }
  }, [timer, countDown, setCountdown, resetTimer, playEndOfRound]);

  const handleAutoplay = useCallback(() => {
    if (round <= TOTAL_ROUNDS) {
      if (!isTimerExpired(timer)) {
        getUpdatedCountdown(countDown, setCountdown);
      } else {
        playEndOfRound();
        incrementRound();
        const nextMode = getNextMode(mode, round + 1);
        setTimer(getDefaultTimer(nextMode));
        startTimer();
      }
    } else {
      setTimer(FOCUS_TIMER);
      resetRound();
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
    playEndOfRound,
    resetRound,
  ]);

  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(
        autoPlay ? handleAutoplay : handleTick,
        1000
      );
      return () => clearInterval(interval);
    }
  }, [isRunning, handleTick, autoPlay, handleAutoplay]);

  return (
    <Text
      size='6xl'
      fontSize={['6rem', '8rem', '10rem']}
      fontFamily={'Martian Mono Variable'}
      fontWeight={'semibold'}
      noOfLines={1}
      color='white'
    >
      {timePad(countDown.minutes)}:{timePad(countDown.seconds)}
    </Text>
  );
};
