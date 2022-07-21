/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import {
  Avatar,
  AvatarList,
  Button,
  Col,
  Input,
  ProfileTitle,
  Row,
  Title,
  Wrapper,
  AccountAdd
} from './AccountForm.style';
import { avatars } from '../../../assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../../../firebase';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  setDoc,
  where
} from 'firebase/firestore';
import jwt_decode from 'jwt-decode';
import { useDispatch } from 'react-redux';
import { addAccount, deleteAccount, editAccount } from '../../../redux';

const AccountForm = ({ setShowForm, showForm, setIsEditing, setHas, account, setAccount }) => {
  const [showAvaList, setShowAvaList] = useState(false);
  const [avatar, setAvatar] = useState();
  const [name, setName] = useState('');

  const token = localStorage.getItem('token');
  const decode = jwt_decode(token);

  const dispatch = useDispatch();

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  const handleAddAccount = async (e, name, avatar) => {
    e.target.style.pointerEvents = 'none';
    await addDoc(collection(db, 'accounts'), {
      uid: decode.sub,
      name: name,
      avatarImg: avatar
    });
    setAvatar('');
    setName('');
    setHas((prev) => prev + 1);
    setAccount(null);
    e.target.style.pointerEvents = 'auto';
    setIsEditing(false);
    setShowForm(false);
  };

  const handleDeleteAccount = async (id) => {
    const res = await deleteDoc(doc(db, 'accounts', id));
    dispatch(deleteAccount(id));
    setAvatar('');
    setName('');
    setHas((prev) => prev - 1);
    setAccount(null);
    setIsEditing(false);
    setShowForm(false);
  };

  const handleEditAccount = async (e, id, name, avatar) => {
    await setDoc(
      doc(db, 'accounts', id),
      {
        name: name,
        avatarImg: avatar,
        uid: decode.sub
      },
      { merge: true }
    );
    await dispatch(
      editAccount({ id: id, data: { name: name, avatarImg: avatar, uid: decode.sub } })
    );
    setAvatar('');
    setName('');
    setHas((prev) => prev + 1);
    setAccount(null);
    e.target.style.pointerEvents = 'auto';
    setIsEditing(false);
    setShowForm(false);
  };

  const renderAvaList = () => {
    if (avatar) {
      return (
        <>
          <Avatar onClick={() => setShowAvaList(!showAvaList)}>
            <img src={avatar} />
          </Avatar>
          <AvatarList show={showAvaList}>
            {avatars.map((item) => (
              <Avatar
                key={item}
                onClick={() => {
                  setShowAvaList(false);
                  setAvatar(item);
                }}>
                <img src={item} />
              </Avatar>
            ))}
            <div className="avatar-list-mask"></div>
          </AvatarList>
        </>
      );
    } else {
      return (
        <>
          <AccountAdd onClick={() => setShowAvaList(!showAvaList)}>
            <FontAwesomeIcon icon={faPlus} />
          </AccountAdd>
          <AvatarList show={showAvaList}>
            {avatars.map((item) => (
              <Avatar key={item} onClick={() => setAvatar(item)}>
                <img src={item} />
              </Avatar>
            ))}
            <div className="avatar-list-mask"></div>
          </AvatarList>
        </>
      );
    }
  };

  return (
    <Wrapper showForm={showForm}>
      <Row>
        <Title>Edit Profile</Title>
      </Row>
      <Row gap={'1.5vw'}>
        <Col style={{ position: 'relative' }}>
          {account === null ? (
            <>{renderAvaList()}</>
          ) : (
            <Avatar>
              <img src={account.data.avatarImg} />
            </Avatar>
          )}
        </Col>
        <Col>
          <Row>
            <Col>
              <Input
                type="text"
                placeholder={'Name'}
                defaultValue={account !== null ? account.data.name : ''}
                onChange={(e) => setName(e.target.value)}
              />
              <ProfileTitle>Plan Detail:</ProfileTitle>
              <div style={{ fontWeight: '700', fontSize: '1em', color: '#ccc' }}>
                Premiere{' '}
                <span style={{ border: `2px solid #ccc`, borderRadius: '4px', padding: '2px' }}>
                  ULTRA HD
                </span>
              </div>
            </Col>
          </Row>
          <Row style={{ border: 'none' }}>
            <Col>
              <ProfileTitle>Maturity Settings:</ProfileTitle>
              <Button id="maturity-btn">All Maturity Ratings</Button>
              <p>Show titles of all maturity ratings for this profile</p>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row style={{ border: 'none', gap: '20px' }}>
        {account === null ? (
          <Button id="save-btn" onClick={(e) => handleAddAccount(e, name, avatar)}>
            Create
          </Button>
        ) : (
          <Button
            id="save-btn"
            onClick={(e) => handleEditAccount(e, account.id, name, account.data.avatarImg)}>
            Save
          </Button>
        )}

        <Button
          onClick={() => {
            setAccount(null);
            setIsEditing(false);
            setShowForm(false);
          }}>
          Cancel
        </Button>
        {account !== null && (
          <Button onClick={() => handleDeleteAccount(account.id)}>Delete Profile</Button>
        )}
      </Row>
    </Wrapper>
  );
};

export default AccountForm;
