import { Textarea } from '@chakra-ui/react';

export const GoalInput = () => {
  return (
    <Textarea
      width='100%'
      variant='unstyled'
      placeholder="What's your goal today?"
      colorScheme='whiteAlpha'
      _placeholder={{ color: 'inherit', textAlign: 'center', opacity: 0.5 }}
      fontSize={{ base: '2xl', md: '3xl' }}
      textAlign={'center'}
      resize={'none'}
      sx={{
        '&:focus': {
          outline: 'none',
        },
        wordWrap: 'break-word',
        overflowWrap: 'break-word',
      }}
    />
  );
};
