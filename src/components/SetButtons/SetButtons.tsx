import { Stack } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';

export const SetButtons = () => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const id = e.currentTarget.id;
    console.log(id);
  };

  return (
    <Stack direction='row' align='center' justify='space-between' wrap='wrap'>
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
