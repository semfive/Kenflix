import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
    0%{
        background-color: transparent;
    }
    50%{
        background-color: #333;
        opacity: .75;
    }
    100%{background-color: transparent}
`;

export const Wrapper = styled.div`
  width: 100%;
  min-height: 300px;
`;

export const LoadList = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 100px;
  padding: 10px 30px;
`;

export const LoadItem = styled.div`
  width: 20%;
  height: 100px;
  position: relative;
  overflow: hidden;
  border-radius: 4px;
  background-color: transparent;

  &:nth-child(1) {
    animation: ${fadeIn} 1s ease-in-out infinite forwards;
  }
  &:nth-child(2) {
    animation: ${fadeIn} 1s ease-in-out 200ms infinite forwards;
  }
  &:nth-child(3) {
    animation: ${fadeIn} 1s ease-in-out 400ms infinite forwards;
  }
  &:nth-child(4) {
    animation: ${fadeIn} 1s ease-in-out 600ms infinite forwards;
  }
  &:nth-child(5) {
    animation: ${fadeIn} 1s ease-in-out 800ms infinite forwards;
  }
`;
