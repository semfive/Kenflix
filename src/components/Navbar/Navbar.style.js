import styled, { keyframes } from 'styled-components';

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
  }
`;

export const NavList = styled.ul`
  list-style: none;
  display: flex;
  margin-left: 15px;
  gap: 15px;
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
  gap: 15px;
  svg {
    font-size: 24px;
    cursor: pointer;
  }
`;

export const Author = styled.div`
  img {
    width: 32px;
    height: auto;
    object-fit: cover;
  }
`;
