import React, { useRef, useState } from 'react';
import { Author, NavItem, NavLeft, NavList, NavRight, Wrapper } from './Navbar.style';
import logo from '../../assets/images/logo.png';
import avatar from '../../assets/images/avatar.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Button from '../Button/Button';
import axios from 'axios';
import { useAuth } from '../../hooks';
import { API_KEY, BASE_URL } from '../../api/request';

const Navbar = ({ navItems, button }) => {
  const [navBG, setNavBG] = useState(false);
  const [openBox, setOpenBox] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [search, setSearch] = useState('');

  const searchRef = useRef();

  const { token } = useAuth();

  const changeBackground = () => {
    if (window.pageYOffset > 0) {
      setNavBG(true);
    } else {
      setNavBG(false);
    }
  };
  window.addEventListener('scroll', changeBackground);

  const showSearchBox = (e) => {
    e.stopPropagation();
    searchRef.current.focus();
    setOpenBox(!openBox);
  };

  const handleSubmit = async (e) => {
    if (e.code === 'Enter') {
      const res = await axios.get(`${BASE_URL}/search/movie`, {
        params: {
          api_key: API_KEY,
          query: search
        }
      });

      console.log(res);
    }
  };

  return (
    <Wrapper navBG={navBG}>
      <NavRight>
        <div>
          <img src={logo} alt="site logo" />
        </div>
        {token && (
          <>
            <div id="nav-dropdown">
              <span id="nav-dropdown-btn">Browser</span>

              <NavList>
                <div className="arrow"></div>
                {navItems?.map((navItem) => (
                  <NavItem key={navItem.name}>{navItem.name}</NavItem>
                ))}
              </NavList>
            </div>
          </>
        )}
      </NavRight>
      <NavLeft openBox={openBox}>
        {token && (
          <>
            <div id="search-icon">
              <FontAwesomeIcon icon={faMagnifyingGlass} onClick={(e) => showSearchBox(e)} />
              <input
                ref={searchRef}
                id="search-box"
                placeholder="Title, people, genres"
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={(e) => handleSubmit(e)}
              />
            </div>

            <div id="notification">
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
