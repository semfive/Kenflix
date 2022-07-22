import styled from 'styled-components';
import { COLOR } from '../../utils/color';

export const Wrapper = styled.div`
  width: 100%;
  background-color: #f3f3f3;

  .horizon-center {
    display: flex;
    align-items: center;
  }

  .show {
    display: flex;
  }
`;

export const NavbarWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.97);
  height: 80px;
  position: relative;
`;

export const Navbar = styled.div`
  background-color: rgba(0, 0, 0, 0.97);
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 45px;
  img {
    width: 50px;
    height: auto;
    object-fit: cover;
    cursor: pointer;
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
    color: ${COLOR.white[0]};
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

export const Body = styled.div`
  width: 100%;
  padding: 20px 30px 0;
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  max-width: 1024px;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
  margin-bottom: 0.7rem;
  padding-bottom: 0.8rem;
  border-bottom: 1px solid ${COLOR.primary3};
`;

export const HeaderTitle = styled.h1`
  color: ${COLOR.primary3};
  font-weight: 500;
  font-size: 2.15rem;
`;

export const ContentSection = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 30px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ContentLeft = styled.div`
  width: 270px;
`;

export const ContentRight = styled.div`
  width: 100%;
  font-size: 0.8rem;

  .visa-card-img {
    height: 20px;
    width: auto;
    object-fit: cover;
  }
  .setting-link {
    margin: 10px;
  }
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Row = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  padding-bottom: 30px;
  margin-bottom: 15px;
  border-bottom: 1px solid #ccc;
  a {
    text-align: right;
  }
`;

export const ContentTitle = styled.h2`
  color: ${COLOR.primary2[2]};
  font-weight: 400;
  font-size: 1.125rem;
  text-transform: uppercase;
`;

export const AccountList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
`;

export const Account = styled.li`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
  margin-bottom: 15px;
  border-bottom: 1px solid #ccc;
  cursor: pointer;
  .account-left {
    display: flex;
    gap: 15px;
  }

  .account-img {
    height: 60px;
    width: auto;
    object-fit: cover;
    border-radius: 4px;
  }

  .account-flex-col {
    display: flex;
    flex-direction: column;
    gap: 0.4em;
    div:first-child {
      font-weight: 700;
      font-size: 1.2em;
      color: ${COLOR.primary2[1]};
    }
    div:nth-child(2) {
      font-size: 0.8em;
      color: #787878;
    }
  }
`;

export const AccountSettingList = styled.ul`
  width: 100%;
  list-style: none;
  display: none;
  flex-direction: column;
  padding-left: 75px;
`;

export const AccountSettingItem = styled.li`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 16px 0 20px;
  border-bottom: 1px solid #ccc;
  .account-flex-col {
    display: flex;
    flex-direction: column;
    gap: 0.4em;
    div:first-child {
      font-weight: 400;
      font-size: 1.2em;
      color: ${COLOR.primary2[1]};
    }
    div:nth-child(2) {
      font-size: 0.8em;
      color: #787878;
    }
  }
`;
