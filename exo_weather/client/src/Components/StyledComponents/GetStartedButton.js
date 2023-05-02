import styled from 'styled-components';

const GetStartedButton = () => {
  return (
    <ButtonWrapper>
      <ButtonLink to="#">Get Started...</ButtonLink>
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5vh;
  width: 50vh;
`;

const ButtonLink = styled(ButtonWrapper)`
  padding: 1rem 2rem;
  background-image: url("./images/starbackground.jpeg");
  color: white;
  text-decoration: none;
  justify-content: center;
  border-radius: 5px;
  font-size: 1.2rem;
  cursor: pointer;

  &:hover {
    background-color: #f8ab07;
  }
`;

export default GetStartedButton;
