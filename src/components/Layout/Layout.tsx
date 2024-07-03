import styled from 'styled-components';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-image: radial-gradient(
    circle,
    #812be9,
    #9e25e6,
    #b81ee3,
    #ce18df,
    #e314db,
    #f100c4,
    #fa00af,
    #ff009b,
    #ff2d75,
    #ff5951,
    #ff8130,
    #ffa50e
  );
`;

export const Layout = () => {
  return (
    <Container>
      <Header />
      <Main />
      <Footer />
    </Container>
  );
};
