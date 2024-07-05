import styled from 'styled-components';
import { Pomodoro } from '../../Pomodoro';

const MainContainer = styled.main`
  flex: 3 1 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Main = () => {
  return (
    <MainContainer>
      <Pomodoro />
    </MainContainer>
  );
};

export default Main;
