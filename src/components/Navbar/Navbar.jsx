import React, { useState } from 'react';
import { Author, NavItem, NavLeft, NavList, NavRight, Wrapper } from './Navbar.style';
import logo from '../../assets/images/logo.png';
import avatar from '../../assets/images/avatar.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Button from '../Button/Button';
import { useAuth } from '../../hooks';

const Navbar = ({ navItems, button }) => {
  const [navBG, setNavBG] = useState(false);
  const { token } = useAuth();

  const changeBackground = () => {
    if (window.pageYOffset > 0) {
      setNavBG(true);
    } else {
      setNavBG(false);
    }
  };
  window.addEventListener('scroll', changeBackground);
  return (
    <Wrapper navBG={navBG}>
      <NavRight>
        <div>
          <img src={logo} alt="site logo" />
        </div>
        {token && (
          <NavList>
            {navItems?.map((navItem) => (
              <NavItem key={navItem.name}>{navItem.name}</NavItem>
            ))}
          </NavList>
        )}
      </NavRight>
      <NavLeft>
        {token && (
          <>
            <div>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>
            <div>
              <FontAwesomeIcon icon={faBell} />
            </div>
            <Author>
              <img src={avatar} alt="user avatar" />
            </Author>
          </>
        )}
        {button?.map((item, index) => (
          <Button key={index} onClick={item.callBack}>
            {item.name}
          </Button>
        ))}
      </NavLeft>
    </Wrapper>
  );
};

export default Navbar;
