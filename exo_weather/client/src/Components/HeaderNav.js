import React from 'react';
import styled from 'styled-components';

const TitleBar = () => {
  return (
    <Header>
      <Title>exoWeather</Title>
      <Nav>
        <NavItem>
          <NavButton>Options
            <DropdownList>
              <DropdownItem><DropdownLink href="#">Home</DropdownLink></DropdownItem>
              <DropdownItem><DropdownLink href="#">All Planets</DropdownLink></DropdownItem>
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
  padding: 20px;
  background-color: #081d3d;
  color: #cf460e;
  border: solid 5px;
  border-radius: 100px;
`;


const Title = styled.h1`
  font-size: 40px;
  margin: 0;
  text-align: center;
  margin-left: 125px;
  font-family: 'aquire-font', sans-serif;
  color: white;
  flex: 1;
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
  background-color: #081d3d;
  border: none;
  cursor: pointer;
  font-size: 20px;
  font-family: 'aquire-font', sans-serif;
`;

const DropdownList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  display: none;
  list-style: none;
  padding: 10px;
  margin: 0;
  background-color: #081d3d;
  ${NavButton}:hover & {
    display: block;
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
  font-size: 15px;
`;

export default TitleBar;
