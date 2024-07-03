import styled from 'styled-components';

const FooterContainer = styled.div`
  flex: 0 2 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Copyright = styled.div`
  font-size: 12px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Copyright>Cristina Lester &copy; 2024</Copyright>
    </FooterContainer>
  );
};

export default Footer;
