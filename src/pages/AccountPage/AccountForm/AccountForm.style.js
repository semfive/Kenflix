import styled, { keyframes } from 'styled-components';
import { COLOR } from '../../../utils/color';
import { fadeIn } from '../AccountPage.style';

const avaApper = keyframes`
    0%{
        opacity: 0;
    }

    50%{
        transform: scale(1.08);
    }
    100%{
        opacity: 1;
        transform: scale(1);
    }
`;

export const Wrapper = styled.div`
  display: ${({ showForm }) => (showForm ? 'flex' : 'none')};
  flex-direction: column;
  animation: ${fadeIn} 300ms ease-in-out forwards;

  #maturity-btn {
    background: #333;
    border-color: transparent;
    font-size: 1vw;
    color: #fff;
    width: fit-content;
    pointer-events: none;
  }
  #save-btn {
    background-color: ${COLOR.white[0]};
    color: ${COLOR.primary3};
    border-color: ${COLOR.white[0]};
    :hover {
      background-color: ${COLOR.red};
      color: ${COLOR.white[0]};
      border-color: ${COLOR.red};
    }
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid ${COLOR.primary2[1]};
  gap: ${({ gap }) => gap || '0'};
  padding: 1vw 0;
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  width: ${({ w }) => w || 'auto'};
  gap: ${({ gap }) => gap || '0'};
  p {
    color: ${COLOR.white[0]};
    margin: 1em 0;
    font-size: 1vw;
  }
`;

export const Title = styled.h3`
  font-size: 4vw;
  font-weight: 500;
  color: ${COLOR.white[0]};
`;

export const Input = styled.input`
  outline: none;
  border: 1px solid transparent;
  background-color: #666;
  padding: 0.2em 0.6em;
  margin-right: 0.8em;
  width: 18em;
  height: 2em;
  color: ${COLOR.white[0]};
  font-weight: 500;
  &::placeholder {
    font-weight: 700;
    color: ${COLOR.white[1]};
  }
`;
export const AvatarList = styled.div`
  list-style: none;
  /* background-color: rgba(0, 0, 0, 0.5); */
  display: ${({ show }) => (show ? 'grid' : 'none')};
  grid-template-columns: repeat(2, 1fr);
  gap: 5px;
  position: absolute;
  top: 9vw;
  right: 0;
  z-index: 10;
`;

export const Avatar = styled.div`
  height: 8vw;
  max-height: 180px;
  max-width: 180px;
  min-height: 80px;
  min-width: 80px;
  width: 8vw;
  /* overflow: hidden; */
  list-style: none;
  opacity: 0;
  cursor: pointer;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 4px;
    &:hover {
      transform: scale(1.08);
      transition: transform 100ms ease-in-out;
    }
  }

  &:nth-of-type(1) {
    animation: ${avaApper} 200ms ease-in-out 0.2s forwards;
  }
  &:nth-of-type(2) {
    animation: ${avaApper} 200ms ease-in-out 0.4s forwards;
  }
  &:nth-of-type(3) {
    animation: ${avaApper} 200ms ease-in-out 0.6s forwards;
  }
  &:nth-of-type(4) {
    animation: ${avaApper} 200ms ease-in-out 0.8s forwards;
  }
`;

export const AccountAdd = styled.div`
  border-radius: 4px;
  height: 8vw;
  max-height: 180px;
  max-width: 180px;
  min-height: 80px;
  min-width: 80px;
  width: 8vw;
  list-style: none;
  border-radius: 10px;
  border: 3px solid grey;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
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

export const ProfileTitle = styled.h2`
  font-weight: 400;
  font-size: 1.3vw;
  color: #ccc;
  margin: 0.8em 0;
  margin-top: 2em;
`;

export const Button = styled.button`
  outline: none;
  border: 1px solid grey;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  color: grey;
  padding: 0.5em 1.5em;
  font-size: 1.2vw;
  font-weight: 700;
  cursor: pointer;
  &:hover {
    border-color: ${COLOR.white[0]};
    color: ${COLOR.white[0]};
  }
`;
