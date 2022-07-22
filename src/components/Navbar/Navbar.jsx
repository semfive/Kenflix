/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react';
import {
  AccountAva,
  AccountItem,
  Author,
  AuthorDropdown,
  DropdownButton,
  NavItem,
  NavLeft,
  NavList,
  NavRight,
  Wrapper
} from './Navbar.style';
import logo from '../../assets/images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBell,
  faCaretDown,
  faMagnifyingGlass,
  faPen,
  faUser
} from '@fortawesome/free-solid-svg-icons';
import Button from '../Button/Button';
import axios from 'axios';
import { useAuth } from '../../hooks';
import { API_KEY, BASE_URL } from '../../api/request';
import jwtDecode from 'jwt-decode';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import { addAccounts, setSearch } from '../../redux';
import { useDispatch, useSelector } from 'react-redux';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../../firebase';
import { useLocation, useNavigate } from 'react-router-dom';

const Navbar = ({ navItems, button }) => {
  const [navBG, setNavBG] = useState(false);
  const [openBox, setOpenBox] = useState(false);

  const accounts = useSelector((state) => state.accounts);
  const search = useSelector((state) => state.search);

  const searchRef = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const currentUrl = useLocation();

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  const { token, setToken } = useAuth();

  const account = JSON.parse(localStorage.getItem('account'));

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
    if (e.code === 'Enter' && currentUrl.pathname == `/homepage/${account.id}`) {
      dispatch(setSearch(e.target.value));
      navigate(`search=${search}`);
    }
  };

  const handleSignOut = async () => {
    await localStorage.clear();
    await setToken();
    navigate('/');
  };

  useEffect(() => {
    const getAccounts = async () => {
      const decode = jwtDecode(token);
      const q = query(collection(db, 'accounts'), where('uid', '==', decode.sub));
      const querySnapshot = await getDocs(q);
      const accountsArray = [];
      await querySnapshot.forEach(async (doc) => {
        // doc.data() is never undefined for query doc snapshots
        accountsArray.push({ id: doc.id, data: doc.data() });
      });
      await dispatch(addAccounts(accountsArray));
    };
    if (token) {
      getAccounts();
    }
  }, []);

  return (
    <Wrapper navBG={navBG}>
      <NavRight>
        <div onClick={() => navigate('/accounts')}>
          <img src={logo} alt="site logo" />
        </div>
        {token && (
          <>
            <div id="nav-dropdown">
              <span id="nav-dropdown-btn">Browser</span>
              <div className="arrow"></div>
              <NavList>
                {navItems?.map((navItem) => (
                  <NavItem key={navItem.name} onClick={navItem.navNavigate}>
                    {navItem.name}
                  </NavItem>
                ))}
              </NavList>
            </div>
          </>
        )}
      </NavRight>
      <NavLeft openBox={openBox}>
        {account && (
          <>
            <div id="search-icon">
              <FontAwesomeIcon icon={faMagnifyingGlass} onClick={(e) => showSearchBox(e)} />
              <input
                ref={searchRef}
                id="search-box"
                placeholder="Title, people, genres"
                onChange={(e) => dispatch(setSearch(e.target.value))}
                onKeyDown={(e) => handleSubmit(e)}
              />
            </div>

            <div id="notification">
              <FontAwesomeIcon icon={faBell} />
            </div>
            <Author>
              <img src={account.data.avatarImg} alt="user avatar" />
              <FontAwesomeIcon className="dropdown-icon" icon={faCaretDown} />
              <div className="arrow"></div>
              <AuthorDropdown>
                {accounts.map((account) => (
                  <AccountItem
                    key={account.id}
                    onClick={() => {
                      localStorage.setItem('account', JSON.stringify(account));
                      navigate(`/homepage/${account.id}`);
                    }}>
                    <AccountAva src={account.data.avatarImg} alt="Account Avatar" />
                    <span>{account.data.name}</span>
                  </AccountItem>
                ))}
                <DropdownButton onClick={() => navigate('/accounts')}>
                  <FontAwesomeIcon icon={faPen} />
                  <span>Manage Profiles</span>
                </DropdownButton>
                <DropdownButton onClick={() => navigate('/YourAccount')}>
                  <FontAwesomeIcon icon={faUser} />
                  <span>Account</span>
                </DropdownButton>
                <DropdownButton style={{ border: 'none' }} onClick={handleSignOut}>
                  <span>sign out of Netflix</span>
                </DropdownButton>
              </AuthorDropdown>
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
