import styled, { keyframes } from 'styled-components';
import { COLOR } from '../../utils/color';

export const fadeIn = keyframes`
    from{
        transform: scale(1.1);
        opacity: 0;

    }
    to{
        transform: scale(1);
        opacity: 1;
    }
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: #141414;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Navbar = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 70px;
  padding: 0 4%;
  display: flex;
  align-items: center;
  overflow: hidden;
  img {
    height: 50px;
    width: auto;
    object-fit: cover;
  }
`;

export const Container = styled.div`
  display: ${({ showForm }) => (showForm ? 'none' : 'flex')};
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  animation: ${fadeIn} 300ms ease-in-out forwards;
`;

export const Title = styled.h3`
  font-size: 3.5vw;
  color: ${COLOR.white[0]};
`;

export const AccountList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(4, minmax(84px, 1fr));
  gap: 2vw;
`;

export const AccountItem = styled.li`
  max-height: 200px;
  max-width: 200px;
  min-height: 84px;
  min-width: 84px;
  height: 10vw;
  width: 10vw;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  position: relative;

  &:hover {
    transform: scale(1.08);
    transition: transform 100ms ease-in-out;
  }
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
  .edit-icon {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: ${({ isEditing }) => (isEditing ? 'rgba(0,0,0,0.65)' : 'transparent')};
    display: ${({ isEditing }) => (isEditing ? 'block' : 'none')};
    svg {
      color: ${COLOR.white[0]};
      font-size: 2rem;
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      margin: auto;
    }
  }
  & > svg {
  }
`;

export const AccountAdd = styled.li`
  max-height: 200px;
  max-width: 200px;
  min-height: 84px;
  min-width: 84px;
  height: 10vw;
  width: 10vw;
  border-radius: 10px;
  border: 3px solid grey;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  svg {
    color: grey;
    font-size: 2rem;
  }
  &:hover {
    border-color: ${COLOR.white[0]};
    color: ${COLOR.white[0]};
    svg {
      color: ${COLOR.white[0]};
    }
  }
`;

export const ManageButton = styled.button`
  outline: none;
  background-color: ${({ isEditing }) => (isEditing ? COLOR.white[0] : 'transparent')};
  border: 1px solid ${({ isEditing }) => (isEditing ? COLOR.white[0] : 'grey')};
  padding: 10px 15px;
  margin: 2em 0 1em;
  max-width: 200px;
  font-size: 1.2vw;
  font-weight: ${({ isEditing }) => (isEditing ? '700' : '500')};
  color: ${({ isEditing }) => (isEditing ? COLOR.primary3 : 'grey')};
  cursor: pointer;
  :hover {
    border-color: ${({ isEditing }) => (isEditing ? COLOR.red : COLOR.white[0])};
    background-color: ${({ isEditing }) => (isEditing ? COLOR.red : 'transparent')};
    color: ${({ isEditing }) => !isEditing && COLOR.white[0]};
  }
`;
