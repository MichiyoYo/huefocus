/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box } from '@chakra-ui/react';
import { GoalInput } from './GoalInput';
import { ModeButtons } from './ModeButtons';
import { Timer } from './Timer/Timer';
import { ActionButtons } from './ActionButtons';

export const Pomodoro = () => {
  return (
    <Box
      maxW='lg'
      minW='sm'
      display='flex'
      flexDirection='column'
      gap={5}
      alignItems='center'
    >
      <GoalInput />
      <ModeButtons />
      <Timer />
      <ActionButtons />
    </Box>
  );
};
