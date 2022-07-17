import styled, { keyframes } from 'styled-components';
import background from '../../assets/images/login-background.jpg';

const swapIn = keyframes`
  from{
    opacity: 0;
    margin-right: -100%;
  }to{
    opacity: 1;
    margin-left: unset;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: url(${background}) center center / cover no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  width: 400px;
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
  gap: 15px;
  button {
    margin: 10px 0 5px 0;
  }

  svg {
    font-size: 1.5rem;
    color: #fff;
  }
  animation: ${swapIn} 1s ease-in forwards;
`;

export const Title = styled.div`
  font-size: 3.5rem;
  text-transform: uppercase;
  margin: 15px;
  color: #fff;
  span {
    color: #e50914;
    font-size: 3.5rem;
  }
`;

export const Input = styled.input`
  outline: none;
  border: none;
  padding: 15px;
  border-radius: 8px;
  width: 100%;
  background-color: #222028;
  color: #fff;
  font-size: 1rem;
  &:focus {
    border: 2px solid #e50914;
  }
`;

export const LoginList = styled.ul`
  list-style: none;
  display: flex;
  gap: 10px;
`;

export const LoginItem = styled.li`
  padding: 15px 35px;
  border-radius: 8px;
  cursor: pointer;
  &:first-child {
    background-color: #e50914;
  }
`;

export const Text = styled.div`
  color: #fff;
  font-size: 1rem;
  span {
    font-weight: 500;
    :hover {
      cursor: pointer;
      color: #e50914;
    }
  }
`;
