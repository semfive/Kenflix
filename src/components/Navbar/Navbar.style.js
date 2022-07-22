import styled, { keyframes } from 'styled-components';
import { COLOR } from '../../utils/color';

const showBG = keyframes`
    from{
      background-color: transparent;
    }
    to{
        background-color: #000;
    }
`;

const hideBG = keyframes`
    from{
        background-color: #000;
    }
    to{
        background-color: transparent;
        
    }
`;

const showSearchBox = keyframes`
  from{
    width: 32px;
    
  }
  to{
    width: 300px;
    background-color: rgba(0, 0, 0, 0.75);
    border: 1px solid ${COLOR.white[0]};
  }
`;

const hideSearchBox = keyframes`
  from{
    width: 300px;
    background-color: rgba(0, 0, 0, 0.75);
  }
  to{
    width: 32px;
    background-color: transparent;
    border: none;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
  position: fixed;
  top: 0;
  z-index: 99;
  background-color: transparent;
  background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.7) 10%, transparent);
  animation-name: ${({ navBG }) => (navBG ? showBG : hideBG)};
  animation-duration: ${({ navBG }) => (navBG ? '0.2s' : '0.3s')};
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
`;

export const NavRight = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  gap: 15px;
  img {
    width: 50px;
    height: auto;
    object-fit: cover;
    cursor: pointer;
  }
  #nav-dropdown {
    position: relative;
    padding: 10px 1rem;
    width: fit-content;
    cursor: pointer;
    &:hover {
      ul {
        opacity: 1;
        display: flex;
      }
      .arrow {
        opacity: 1;
      }
    }
    @media (max-width: 768px) {
      .arrow {
        border: 7px solid transparent;
        border-bottom-color: ${COLOR.white[0]};
        height: 0;
        opacity: 0;
        position: absolute;
        top: 100%;
        right: 0;
        z-index: 100;
      }
    }
  }
  #nav-dropdown-btn {
    color: ${COLOR.white[0]};
    font-size: 1rem;
    @media (min-width: 768px) {
      display: none;
    }
  }
`;

export const NavList = styled.ul`
  list-style: none;
  display: flex;
  margin-left: 15px;
  gap: 15px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
    text-align: left;
    margin: 0;
    opacity: 0;
    z-index: 99;
    background-color: rgba(0, 0, 0, 0.9);
    border: 1px solid hsla(0, 0%, 100%, 0.15);
    padding: 10px;
    min-width: 250px;
    border-top: 1px solid ${COLOR.white[0]};
    align-items: center;
    position: absolute;
    top: 140%;
    left: -50%;
    display: none;
    li {
      /* padding: 5px 10px; */
      word-break: keep-all;
    }
    &::before {
      content: '';
      position: absolute;
      top: -20px;
      width: 100%;
      height: 20px;
      background-color: transparent;
      :hover {
        & {
          display: flex;
        }
      }
    }
  }
`;

export const NavItem = styled.li`
  color: #e5e5e5;
  font-weight: 500;
  font-size: 1rem;
  :hover {
    color: #b3b3b3;
    cursor: pointer;
  }
`;

export const NavLeft = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  color: #fff;
  gap: 25px;
  svg {
    font-size: 24px;
    cursor: pointer;
  }

  #search-icon {
    display: flex;
    gap: 10px;
    padding: 4px 10px;
    animation: ${({ openBox }) => (openBox ? showSearchBox : hideSearchBox)} 1s ease-in-out forwards;
    svg {
      font-size: 24px;
    }
    #search-box {
      width: 100%;
      background-color: transparent;
      border: none;
      outline: none;
      color: ${COLOR.white[0]};
      font-size: 1rem;
    }
  }
`;

export const AuthorDropdown = styled.div`
  background-color: rgba(0, 0, 0, 0.75);
  display: none;
  gap: 10px;
  width: 181px;
  flex-direction: column;
  position: absolute;
  top: calc(100% + 20px);
  right: 0;
  padding: 15px 10px;
  &::before {
    content: '';
    position: absolute;
    top: -20px;
    width: 100%;
    height: 20px;
    background-color: transparent;
    :hover {
      & {
        display: flex;
      }
    }
  }
`;

export const Author = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  position: relative;
  cursor: pointer;
  img {
    width: 32px;
    height: auto;
    object-fit: cover;
  }

  .dropdown-icon {
    font-size: 1.2rem;
  }

  .arrow {
    border: 5px solid transparent;
    border-bottom-color: ${COLOR.white[0]};
    height: 0;
    position: absolute;
    bottom: -15px;
    right: 50%;
    z-index: 100;
    display: none;
  }

  &:hover,
  .arrow:hover {
    .dropdown-icon {
      transform: rotate(180deg);
      transition: transform 150ms ease-in-out;
    }

    .arrow {
      display: block;
    }

    ${AuthorDropdown} {
      display: flex;
    }
  }
`;

export const AccountItem = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  span {
    color: ${COLOR.white[0]};
    font-size: 13px;
  }
  &:hover {
    span {
      text-decoration: underline;
    }
  }
`;

export const AccountAva = styled.img`
  width: 32px;
  height: auto;
  object-fit: cover;
  border-radius: 4px;
`;

export const DropdownButton = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  color: ${COLOR.white[0]};
  display: flex;
  gap: 10px;
  border-bottom: 1px solid #ccc;
  padding-bottom: 15px;
  cursor: pointer;
  svg {
    width: 32px;
    font-size: 1.2rem;
  }
  span {
    font-size: 12px;
  }

  &:hover {
    span {
      text-decoration: underline;
    }
  }
`;
