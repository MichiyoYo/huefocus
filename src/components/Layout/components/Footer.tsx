import { Text } from '@chakra-ui/react';
import styled from 'styled-components';

const FooterContainer = styled.div`
  flex: 0 2 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Text fontSize={'xs'}>
        <a href='https://cristinalester.rocks' target='_blank'>
          Cristina Lester
        </a>{' '}
        &copy; 2024
      </Text>
    </FooterContainer>
  );
};

export default Footer;
