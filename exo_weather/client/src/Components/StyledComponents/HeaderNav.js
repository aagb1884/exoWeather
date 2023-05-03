import styled from 'styled-components';
import { Link } from 'react-router-dom'
import { useState } from 'react';
import Hamburger from 'hamburger-react'

const HeaderNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <Header>
      <Title>exoWeather</Title>
      <Nav>
        <NavItem>
          <NavButton onClick={toggleMenu}>
            <Hamburger toggled={isOpen} toggle={toggleMenu} />
            <DropdownList isOpen={isOpen}>
              <DropdownItem><DropdownLink href="/">Home</DropdownLink></DropdownItem>
              <DropdownItem><DropdownLink href="/planets">Compare Planets</DropdownLink></DropdownItem>
              <DropdownItem><DropdownLink href="/about">About</DropdownLink></DropdownItem>
            </DropdownList>
          </NavButton>
        </NavItem>
      </Nav>
    </Header>
  );
}

const Header = styled.header`
  display: flex;
  justify-content: center;
  padding: 15px;
  background-image: url("./images/starbackground.jpeg");
  color: #f8ab07;
  border: solid 2.5px;
  border-radius: 100px;
`;


const Title = styled.h1`
  font-size: 40px;
  margin: 0;
  text-align: center;
  padding-top: 10px;
  margin-left: 75px;
  font-family: 'aquire-font', sans-serif;
  color: white;
  flex: auto;
`;

const Nav = styled.nav`
  margin-left: auto;
`;

const NavItem = styled.li`
  position: relative;
  margin-left: 20px;
  list-style: none;
`;

const NavButton = styled.button`
  color: white;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 25px;
  font-family: 'aquire-font', sans-serif;
`;

const DropdownList = styled.ul`
  position: absolute;
  top: 100%;
  right: 0; /* use right instead of left */
  display: none;
  list-style: none;
  padding: 10px;
  margin: 0;
  background-color: #f8ab07;
  ${NavButton}:hover & {
    display: block;
  }

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
    transition: transform 0.3s ease-in-out;
  }
`;


const DropdownItem = styled.li`
  margin: 0;
`;

const DropdownLink = styled.a`
  display: block;
  padding: 10px;
  color: white;
  text-decoration: none;
  font-size: 20px;
  justify-content: center;
`;

export default HeaderNav;
