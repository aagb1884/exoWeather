import styled from 'styled-components';
import { Link } from 'react-router-dom'

const GetStartedButton = () => {
  return (
    <ButtonWrapper>
      <ButtonLink to="/planets">Get Started...</ButtonLink>
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

const ButtonLink = styled(Link)`
  padding: 1rem 2rem;
  background-color: transparent;
  color: white;
  text-decoration: none;
  justify-content: center;
  width: 250px;
  border-radius: 100px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color 0.6s ease-in-out;

  &:hover {
    background-color: #f8ab07;
  }
`;


export default GetStartedButton;
