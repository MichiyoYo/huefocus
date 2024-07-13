/* eslint-disable @typescript-eslint/no-unused-vars */
import styled from 'styled-components';
import LogoPNG from '../../../assets/logo.png';
import { Box, Button, Link, Text, useDisclosure } from '@chakra-ui/react';
import { LuCoffee } from 'react-icons/lu';
import { Settings } from '../../Settings';

const HeaderContainer = styled.header`
  flex: 0 1 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  @media screen and (max-width: 400px) {
    justify-content: center;
    gap: 1rem;
  }
`;

const LogoImg = styled.img`
  height: 2rem;
  width: 2rem;
`;

const Header = () => {
  const { isOpen, onClose } = useDisclosure();
  const goToPage = () => {
    window.open('https://buymeacoffee.com/creechan', '_blank');
  };
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
            <Link
              href='https://huefocus.app'
              style={{ textDecoration: 'none' }}
            >
              huefocus
            </Link>
          </Text>
        </Box>
        <Box>
          {/* <IconButton
            fontSize='2xl'
            fontWeight='light'
            color='white'
            aria-label='Open settings'
            variant='link'
            icon={<LuSettings />}
            onClick={onOpen}
          /> */}
          <Button
            size='sm'
            colorScheme='white'
            variant='outline'
            onClick={goToPage}
            leftIcon={<LuCoffee />}
          >
            Buy me a coffee
          </Button>
        </Box>
      </HeaderContainer>
      <Settings isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default Header;
