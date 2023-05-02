import styled, { keyframes } from 'styled-components';
import GetStartedButton from './StyledComponents/GetStartedButton';
import StyledDropDown from './StyledComponents/StyledDropDown';
const HomePage = () => {
  return (
    <HomePageWrapper>
      <WelcomeP>Welcome to exoWeather...</WelcomeP>
      <GetStartedButtonWrapper>
        <GetStartedButton />
      </GetStartedButtonWrapper>
      <StyledDropDown />
    </HomePageWrapper>
  );
};

const HomePageWrapper = styled.div`
     display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    height: 75vh;
    flex-direction: row;
    flex-wrap: wrap;
    padding-top: 0%;
    align-content: center;
`;

const fadeInOut = keyframes`
  0% {
    opacity: 0.25;
  }
  25% {
    opacity: 0.5;
  }
  50% {
    opacity: 0.75;
  }
  75% {
    opacity: 0.5;
  }
  100% {
    opacity: 0.25;
  }
`;

const WelcomeP = styled.p`
  font-size: 50px;
  text-align: center;
  animation: ${fadeInOut} 5s ease-in-out infinite;
`;

const GetStartedButtonWrapper = styled.div`
  margin-top: 2rem;
  text-align: center;
`;

export default HomePage;
