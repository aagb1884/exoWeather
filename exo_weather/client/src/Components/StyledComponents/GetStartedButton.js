import styled from 'styled-components';

const GetStartedButton = () => {
  return (
    <ButtonWrapper>
      <ButtonLink href="/planets">Get Started...</ButtonLink>
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5vh;
  width: 50vh;
`;

const ButtonLink = styled.a`
  padding: 1rem 2rem;
  background-color: transparent;
  color: white;
  text-decoration: none;
  justify-content: center;
  width: 250px;
  border-radius: 5px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color 0.6s ease-in-out;

  &:hover {
    background-color: #f8ab07;
  }
`;


export default GetStartedButton;
