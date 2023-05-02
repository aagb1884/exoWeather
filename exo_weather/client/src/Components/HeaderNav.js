import styled from 'styled-components';
import { Link } from 'react-router-dom'

const HeaderNav = () => {
  return (
    <Header>
      <Title>exoWeather</Title>
      <Nav>
        <NavItem>
          <NavButton>burger option menu
            <DropdownList>
              <DropdownItem><DropdownLink href="/">Home</DropdownLink></DropdownItem>
              <DropdownItem><DropdownLink href="/planets">All Planets</DropdownLink></DropdownItem>
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
  padding: 20px;
  background-image: url("./images/starbackground.jpeg");
  color: #cf460e;
  border: solid 2.5px;
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
  background-color: #181b1c;
  border: none;
  cursor: pointer;
  font-size: 25px;
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
  background-color: #181b1c;
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
  font-size: 20px;
  justify-content: center;
`;

export default HeaderNav;
