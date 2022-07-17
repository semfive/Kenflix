import styled from 'styled-components';
import { COLOR } from '../../utils/color';

export const Wrapper = styled.section`
  width: 100%;
  padding: 70px 45px;
  overflow: hidden;
  background-color: ${COLOR.primary3};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  max-width: 1100px;
  display: flex;
  gap: 5%;
  flex-direction: ${({ reverse }) => reverse && 'row-reverse'};
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0;
    div {
      width: 100%;
      text-align: center;
    }
  }
`;

export const LeftSide = styled.div`
  width: 55%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${COLOR.white[0]};
  padding: 0 3rem 0 0;
  justify-self: flex-start;
`;
export const RightSide = styled.div`
  width: 45%;
  display: flex;
  justify-content: center;
  position: relative;
  overflow: hidden;
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    z-index: 2;
  }
  video {
    height: 100%;
    left: 49.5%;
    max-height: 55%;
    max-width: 75%;
    position: absolute;
    top: 46%;
    transform: translate(-50%, -50%);
    width: 100%;
  }
`;

export const Title = styled.h1`
  font-size: 3rem;
  margin: 1.5vw 0;
`;
export const SubTitle = styled.h2`
  font-size: 1.6rem;
`;
