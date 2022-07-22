/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Footer } from '../../components';
import {
  Body,
  Container,
  Header,
  HeaderTitle,
  Wrapper,
  Navbar,
  NavbarWrapper,
  Author,
  AuthorDropdown,
  AccountItem,
  AccountAva,
  DropdownButton,
  ContentSection,
  Col,
  ContentTitle,
  Row,
  ContentRight,
  ContentLeft,
  AccountList,
  Account,
  AccountSettingList,
  AccountSettingItem
} from './YourAccount.style';
import { logo, visa } from '../../assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faChevronDown, faPen, faUser } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../../hooks';
import { useNavigate } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import { addAccounts } from '../../redux';
import { useSelector, useDispatch } from 'react-redux';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../../firebase';

const YourAccount = () => {
  const accounts = useSelector((state) => state.accounts);
  const account = JSON.parse(localStorage.getItem('account'));
  const [buttonClick, setButtonClick] = useState(false);

  const accountSettings = [
    {
      title: 'Language',
      description: 'Vietnamese'
    },
    {
      title: 'Viewing Restrictions',
      description: 'No Restrictions.'
    },
    {
      title: 'Profile Lock',
      description: 'Off'
    },
    {
      title: 'Viewing activity',
      description: ''
    },
    {
      title: 'Ratings',
      description: ''
    },
    {
      title: 'Subtitle appearance',
      description: ''
    },
    {
      title: 'Playback settings',
      description: 'Autoplay next episode. Autoplay previews. Default video and audio quality.'
    }
  ];

  const { token, setToken } = useAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  const handleSignOut = async () => {
    await localStorage.clear();
    await setToken();
    navigate('/');
  };

  const showSetting = (index) => {
    const settingList = document.querySelector(`.account-settings-${index}`);

    if (!settingList.classList.contains('show')) {
      settingList.classList.add('show');
    } else {
      settingList.classList.remove('show');
    }
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
    <Wrapper>
      <NavbarWrapper>
        <Navbar>
          <img src={logo} alt="Kenflix log" onClick={() => navigate('/accounts')} />
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
              <DropdownButton onClick={() => navigate('#')}>
                <FontAwesomeIcon icon={faUser} />
                <span>Account</span>
              </DropdownButton>
              <DropdownButton style={{ border: 'none' }} onClick={handleSignOut}>
                <span>sign out of Netflix</span>
              </DropdownButton>
            </AuthorDropdown>
          </Author>
        </Navbar>
      </NavbarWrapper>

      <Body>
        <Container>
          <Header>
            <HeaderTitle>Account</HeaderTitle>
          </Header>
          <ContentSection>
            <ContentLeft>
              <ContentTitle>membership & billing</ContentTitle>
            </ContentLeft>
            <ContentRight>
              <Row>
                <div>kenflix@gmail.com</div>
                <a href="#">Change account email</a>
                <span>Password: ******</span>
                <a href="#">Change password</a>
                <div></div>
                <a href="#">Add phone number</a>
              </Row>
              <Row>
                <div className="horizon-center">
                  <img src={visa} alt="visa card" className="visa-card-img" />
                  <span>**** **** **** 1234</span>
                </div>
                <a href="#">Manage payment info</a>
                <span>Your next billing date is August 14, 2022.</span>
                <a href="#">Add backup payment method</a>
                <div></div>
                <a href="#">Billing details</a>
                <div></div>
                <a href="#">Change billing day</a>
              </Row>
              <Row style={{ border: 'none' }}>
                <div></div>
                <a href="#">Redeem gift card or promo code</a>
                <div></div>
                <a href="#">Where to buy gift cards</a>
              </Row>
            </ContentRight>
          </ContentSection>
          <ContentSection>
            <ContentLeft>
              <ContentTitle>plan details</ContentTitle>
            </ContentLeft>
            <ContentRight>
              <Row>
                <div style={{ fontWeight: '700', fontSize: '1em', color: '#333' }}>
                  Premiere{' '}
                  <span style={{ border: `1.5px solid #333`, borderRadius: '4px', padding: '2px' }}>
                    ULTRA HD
                  </span>
                </div>
                <a href="#">Change plan</a>
              </Row>
            </ContentRight>
          </ContentSection>
          <ContentSection>
            <ContentLeft>
              <ContentTitle>profile & parental controls</ContentTitle>
            </ContentLeft>
            <ContentRight>
              <AccountList>
                {accounts.map((account, index) => (
                  <>
                    <Account
                      key={account.id}
                      className="horizon-center"
                      onClick={() => showSetting(index)}>
                      <div className="account-left">
                        <img className="account-img" src={account.data.avatarImg} alt="account" />
                        <div className="account-flex-col">
                          <div>{account.data.name}</div>
                          <div>All Maturity Ratings</div>
                        </div>
                      </div>
                      <div className="account-right">
                        <FontAwesomeIcon icon={faChevronDown} />
                      </div>
                    </Account>
                    <AccountSettingList className={`account-settings-${index}`}>
                      {accountSettings.map((item) => (
                        <AccountSettingItem key={item.title}>
                          <div className="account-flex-col">
                            <div>{item.title}</div>
                            <div>{item.description}</div>
                          </div>
                          <a href="#">Change</a>
                        </AccountSettingItem>
                      ))}
                    </AccountSettingList>
                  </>
                ))}
              </AccountList>
            </ContentRight>
          </ContentSection>
          <ContentSection style={{ marginBottom: '80px' }}>
            <ContentLeft>
              <ContentTitle>settings</ContentTitle>
            </ContentLeft>
            <ContentRight>
              <Col>
                <a href="#" className="setting-link">
                  Test participation
                </a>
                <a href="#" className="setting-link">
                  Manage download devices
                </a>
                <a href="#" className="setting-link">
                  Recent device streaming activity
                </a>
                <a href="#" className="setting-link">
                  Sign out of all devices
                </a>
                <a href="#" className="setting-link">
                  Download your personal information
                </a>
              </Col>
            </ContentRight>
          </ContentSection>
        </Container>
      </Body>
      <Footer bgColor={'transparent'} />
    </Wrapper>
  );
};

export default YourAccount;
