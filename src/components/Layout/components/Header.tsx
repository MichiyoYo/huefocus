import styled from 'styled-components';
import LogoPNG from '../../../assets/logo.png';
import { Box, IconButton, Text, useDisclosure } from '@chakra-ui/react';
import { LuSettings } from 'react-icons/lu';
import { Settings } from '../../Settings';

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
  const { onOpen, isOpen, onClose } = useDisclosure();
  return (
    <>
      <HeaderContainer>
        <Box display='flex' alignItems='center' gap={1}>
          <LogoImg src={LogoPNG} alt='huefocus logo' />
          <Text
            fontWeight='thin'
            fontFamily={'Comfortaa Variable'}
            fontSize='3xl'
            colorScheme='white'
            as='h1'
          >
            huefocus
          </Text>
        </Box>
        <Box>
          <IconButton
            fontSize='2xl'
            fontWeight='light'
            color='white'
            aria-label='Open settings'
            variant='link'
            icon={<LuSettings />}
            onClick={onOpen}
          />
        </Box>
      </HeaderContainer>
      <Settings isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default Header;
