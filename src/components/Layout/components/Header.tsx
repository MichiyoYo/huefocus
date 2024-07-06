import styled from 'styled-components';
import LogoPNG from '../../../assets/logo.png';
import { Box, Text } from '@chakra-ui/react';
import { LuSettings } from 'react-icons/lu';

const HeaderContainer = styled.header`
  flex: 0 1 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
`;

const LogoImg = styled.img`
  height: 2rem;
  width: 2rem;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Box display='flex' alignItems='center' gap={1}>
        <LogoImg src={LogoPNG} alt='huefocus logo' />
        <Text
          fontWeight='thin'
          fontFamily={'Comfortaa Variable'}
          fontSize='3xl'
          colorScheme='white'
        >
          huefocus
        </Text>
      </Box>
      <Box fontSize='2xl' fontWeight='light'>
        <LuSettings />
      </Box>
    </HeaderContainer>
  );
};

export default Header;
