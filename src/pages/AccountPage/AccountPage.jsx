/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  Wrapper,
  Navbar,
  Container,
  Title,
  AccountList,
  AccountItem,
  ManageButton,
  AccountAdd
} from './AccountPage.style';
import { logo } from '../../assets/images/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faPlus } from '@fortawesome/free-solid-svg-icons';
import AccountForm from './AccountForm/AccountForm';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../../firebase';
import jwt_decode from 'jwt-decode';
import { addAccounts } from '../../redux';

const AccountPage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [has, setHas] = useState(4);
  const [showForm, setShowForm] = useState(false);
  const [account, setAccount] = useState(null);

  const accounts = useSelector((state) => state.accounts);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const token = localStorage.getItem('token');
  const decode = jwt_decode(token);

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  useEffect(() => {
    const getAccounts = async () => {
      const q = query(collection(db, 'accounts'), where('uid', '==', decode.sub));
      const querySnapshot = await getDocs(q);
      const accountsArray = [];
      await querySnapshot.forEach(async (doc) => {
        // doc.data() is never undefined for query doc snapshots
        accountsArray.push({ id: doc.id, data: doc.data() });
      });
      await dispatch(addAccounts(accountsArray));
    };
    getAccounts();
  }, [accounts]);

  const renderForm = (item) => {};
  return (
    <Wrapper>
      <Navbar>
        <img src={logo} alt="Kenflix logo" />
      </Navbar>
      <AccountForm
        setShowForm={setShowForm}
        showForm={showForm}
        setIsEditing={setIsEditing}
        setHas={setHas}
        account={account}
        setAccount={setAccount}
      />
      ;
      <Container showForm={showForm}>
        <Title>{`Who's watching?`}</Title>
        <AccountList>
          {accounts.map((item) => (
            <AccountItem
              key={item.id}
              isEditing={isEditing}
              onClick={() => {
                localStorage.setItem('account', JSON.stringify(item));
                navigate(`/homepage/${item.id}`);
              }}>
              <img src={item.data.avatarImg} alt="Profile Avatar" />
              <div
                className="edit-icon"
                onClick={(e) => {
                  e.stopPropagation();
                  setAccount(item);
                  setShowForm(true);
                }}>
                <FontAwesomeIcon className="fa-flight" icon={faPen} />
              </div>
            </AccountItem>
          ))}
          {has > accounts.length && (
            <AccountAdd onClick={() => setShowForm(true)}>
              <FontAwesomeIcon icon={faPlus} />
            </AccountAdd>
          )}
        </AccountList>
        <ManageButton onClick={() => setIsEditing(!isEditing)} isEditing={isEditing}>
          {isEditing ? 'Done' : 'Manage Profiles'}
        </ManageButton>
      </Container>
    </Wrapper>
  );
};

export default AccountPage;
