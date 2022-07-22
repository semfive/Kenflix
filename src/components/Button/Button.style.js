import styled, { keyframes } from 'styled-components';
import { COLOR } from '../../utils/color';

const loader = keyframes`
  0%{
    transform: rotate(0turn);
  }
  100%{
    transform: rotate(1turn);
  }
`;

export const Wrapper = styled.button`
  border: none;
  outline: none;
  padding: ${({ pd }) => pd || '5px 10px'};
  border-radius: 8px;
  cursor: pointer;
  background-color: ${({ bg }) => bg || 'transparent'};
  color: #fff;
  border: 2px solid #e50914;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  pointer-events: ${({ loading }) => (loading ? 'none' : 'auto')};
  &:hover {
    background-color: rgba(229, 9, 20, 0.3);
  }
`;

export const ButtonLoader = styled.div`
  height: 30px;
  width: 30px;
  border: 5px solid transparent;
  border-radius: 50%;
  border-top-color: #fff;
  background: ${COLOR.red[0]} transparent 10%;

  animation: ${loader} 1s ease infinite;
`;
