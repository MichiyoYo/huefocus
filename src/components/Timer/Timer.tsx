import { Text } from '@chakra-ui/react';
import { Timer as TimerType } from '../../types';
import { timePad } from '../../utils';
import { useState } from 'react';

interface TimerProps {
  timer: TimerType;
}

export const Timer = ({ timer }: TimerProps) => {
  const { isRunning, timeCap, type } = timer;

  return (
    <Text
      size='6xl'
      fontSize='8rem'
      fontFamily={'Russo One'}
      noOfLines={1}
      color='white'
    >
      {!isRunning
        ? `${timePad(timeCap.minutes)}:${timePad(timeCap.seconds)}`
        : type === 'focus'
        ? 'Focus'
        : type === 'shortBreak'
        ? 'Short Break'
        : 'Long Break'}
    </Text>
  );
};
