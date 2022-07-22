import styled, { keyframes } from 'styled-components';
import background from '../../assets/images/welcome-background.jpg';
import { COLOR } from '../../utils/color';

const labelTransition = keyframes`
  from{
    font-size: initial;
   top:50%;
  }
  to{
    font-size: 10px;
    top: 10%;
    transform: unset;
    font-weight: bold;
  }
`;

const labelRevese = keyframes`
from{
    font-size: 10px;
    top: 10%;
    transform: unset;
    font-weight: bold;
  }
  to{
    font-size: initial;
   top:50%;
  }
`;

const showAnswer = keyframes`
  from{
    max-height: 0;
  }
  to{
    max-height: 1200px;
  }
`;

const closeAnswer = keyframes`
  from{
    max-height: 1200px;
  }
  to{
    max-height: 0;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  min-height: 1000px;
  background-color: ${COLOR.primary2[1]};
  display: flex;
  flex-direction: column;
  gap: 10px;
  button {
    background-color: ${COLOR.red[0]};
    padding: 10px 1vw;
  }
  .show {
    div:first-child {
      svg {
        transform: rotate(45deg);
        transition: all 1s ease;
      }
    }
    div:nth-child(2) {
      animation: ${showAnswer} 0.5s ease-in-out forwards;
    }
  }
  .close {
    div:first-child {
      svg {
        transform: rotate(-90deg);
        transition: all 1s ease;
      }
    }
    div:nth-child(2) {
      animation: ${closeAnswer} 0.3s ease-in-out forwards;
    }
  }
`;

export const Jumbotron = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 1;
  padding: 50px;
  margin: 0 auto;
`;

export const ContentTitle = styled.h1`
  font-size: 3rem;
  text-align: center;
  color: ${COLOR.white[0]};
  max-width: 500px;
  margin: 0 auto;
`;

export const ContentSubTitle = styled.h2`
  max-width: 700px;
  font-size: 1.5rem;
  font-weight: 500;
  text-align: center;
  color: ${COLOR.white[0]};
  margin: 1rem auto;
`;

export const SubcribeBox = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr auto;
  section {
    width: 100%;
    position: relative;

    label {
      position: absolute;
      left: 1rem;
      top: 50%;
      transform: translateY(-50%);
      color: ${COLOR.primary2[0]};
      animation: ${({ animate }) => (animate ? labelTransition : labelRevese)} 0.2s ease-in-out
        forwards;
      cursor: text;
    }
  }
  input {
    border: none;
    outline: none;
    width: 100%;
    padding: 1.5rem 1rem 1rem 1rem;
    line-height: 2;
    font-size: 1rem;
    color: ${COLOR.primary3};
  }
  button {
    border-radius: unset;
    width: fit-content;
    align-items: center;
  }
`;

export const Error = styled.div`
  margin: 1rem 0;
  font-size: 1rem;
  color: ${COLOR.red};
`;

export const QuestionSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${COLOR.primary3};
  padding: 70px 45px;
  @media (max-width: 575px) {
    padding: 70px 0;
  }
`;

export const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: ${COLOR.white[0]};
  align-items: center;
`;

export const QATitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2vw;
  padding: 0 3rem;
`;

export const QAList = styled.div`
  margin: 2em auto;
  width: 65%;
  max-width: 1100px;
  display: grid;
  grid-template-rows: repeat(auto, 1fr);
  gap: 0.5rem;
  input {
    border: none;
    outline: none;
    width: 100%;
    padding: 1rem;
    line-height: 2;
    font-size: 0.5rem 1rem;
    color: ${COLOR.primary3};
  }
  button {
    background-color: ${COLOR.red[0]};
    padding: 10px 1vw;
  }
  @media (max-width: 992px) {
    width: 90%;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const QAItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
  cursor: pointer;
`;

export const Question = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8em 2.2em 0.8em 1.2em;
  background-color: ${COLOR.primary2[1]};
  span {
    font-weight: 400;
    font-size: 1.5rem;
  }
`;

export const Answer = styled.div`
  width: 100%;
  font-size: 1.25rem;
  max-height: 0;
  overflow: hidden;
  background-color: ${COLOR.primary2[1]};
  span {
    display: inline-block;
    padding: 1.2rem;
  }
`;
