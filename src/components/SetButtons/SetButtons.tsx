import { Stack } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import { useContext } from 'react';
import { ModeContext } from '../Layout/components/Main';

export const SetButtons = () => {
  const { setMode } = useContext(ModeContext);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const id = e.currentTarget.id;
    console.log(id);
    setMode(id);
  };

  return (
    <Stack spacing={4} direction='row' align='center'>
      <Button
        variant='solid'
        colorScheme='whiteAlpha'
        size='md'
        onClick={handleClick}
        id='focus'
      >
        Focus
      </Button>
      <Button
        variant='solid'
        colorScheme='whiteAlpha'
        size='md'
        onClick={handleClick}
        id='short-break'
      >
        Short Break
      </Button>
      <Button
        variant='solid'
        colorScheme='whiteAlpha'
        size='md'
        onClick={handleClick}
        id='long-break'
      >
        Long Break
      </Button>
    </Stack>
  );
};
