import { Textarea } from '@chakra-ui/react';

export const GoalInput = () => {
  return (
    <Textarea
      variant='unstyled'
      placeholder="What's your goal today?"
      colorScheme='whiteAlpha'
      _placeholder={{ color: 'inherit', textAlign: 'center', opacity: 0.5 }}
      fontSize={['lg', 'xl', '2xl']}
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
