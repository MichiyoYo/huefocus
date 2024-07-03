import styled from 'styled-components';

const HeaderContainer = styled.header`
  flex: 0 1 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <div>Logo</div>
      <div>Credits</div>
    </HeaderContainer>
  );
};

export default Header;
