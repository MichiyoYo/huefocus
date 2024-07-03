import { Button, HStack } from '@chakra-ui/react';
import { LuRewind, LuPlay } from 'react-icons/lu';

interface Props {
  handleStart: () => void;
  handleReset: () => void;
}

export const ActionButtons = ({ handleStart, handleReset }: Props) => {
  return (
    <HStack spacing='24px'>
      <Button
        variant='solid'
        colorScheme='whiteAlpha'
        size='md'
        onClick={handleStart}
        leftIcon={<LuPlay />}
      >
        Start
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
