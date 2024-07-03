import { Input } from '@chakra-ui/react';

export const GoalInput = () => {
  return (
    <Input
      width='100%'
      variant='unstyled'
      placeholder="What's your goal today?"
      colorScheme='whiteAlpha'
      _placeholder={{ color: 'inherit', textAlign: 'center', opacity: 0.5 }}
      fontSize={{ base: '2xl', md: '3xl' }}
      textAlign={'center'}
    />
  );
};
