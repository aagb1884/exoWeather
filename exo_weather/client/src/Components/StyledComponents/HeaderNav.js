import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
// import { faEarth } from '@fortawesome/free-solid-svg-icons';

const HeaderNav = () => {

  return (
    <Header>
      <Title to="/">exoWeather</Title>
      <Nav>
        <NavItem>
          <NavButton>
            {/* <FontAwesomeIcon icon={faEarth} style={{color: "#ffffff"}} size="2x" /> */}
            <FontAwesomeIcon icon={faBars} style={{color: "#ffffff",}} size="2x" />
            <DropdownList>
              <DropdownItem><DropdownLink to="/">Home</DropdownLink></DropdownItem>
              <DropdownItem><DropdownLink to="/planets">Weather</DropdownLink></DropdownItem>
              <DropdownItem><DropdownLink to="/about">About</DropdownLink></DropdownItem>
            </DropdownList>
          </NavButton>
        </NavItem>
      </Nav>
    </Header>
  );
};

const Header = styled.header`
  display: flex;
  justify-content: center;
  padding: 15px;
  background-image: url("./images/starbackground.jpeg");
  color: #f8ab07;
  border: solid 2.5px;
  border-radius: 100px
`;

const Title = styled(Link)`
  font-size: 40px;
  margin: 0;
  text-align: center;
  padding-top: 10px;
  margin-left: 75px;
  font-family: 'aquire-font', sans-serif;
  color: white;
  flex: auto;
  text-decoration: none;
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
  font-size: 25px;
  font-family: 'aquire-font', sans-serif; 
  margin-right: 25px;
`;

const DropdownList = styled.ul`
  position: absolute;
  top: 100%;
  right: 0;
  opacity: 0;
  visibility: hidden;
  list-style: none;
  padding: 10px;
  margin: 0;
  border-radius: 10px;
  transition: opacity 0.5s ease-in-out, visibility 0.3s ease-in-out;
  ${NavButton}:hover & {
    opacity: 1;
    visibility: visible;
  }
`;

const DropdownItem = styled.li`
  margin: 0;
  padding: 10px;
`;

const DropdownLink = styled(Link)`
  display: block;
  padding: 15px;
  color: white;
  text-decoration: none;
  font-size: 20px;
  justify-content: center;
  border: solid 2px;
  border-radius: 100px;
  background-color: #f8ab07;
`;

export default HeaderNav;
