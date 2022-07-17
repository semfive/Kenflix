import styled from 'styled-components';
import { COLOR } from '../../utils/color';

export const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-self: center;
  padding: 2vw 22vw;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 999;

  @media (max-width: 992px) {
    padding: 2vw 19vw;
  }
  @media (max-width: 768px) {
    padding: 2vw 15vw;
  }
  @media (max-width: 575px) {
    padding: 2vw 10vw;
  }
`;

export const Wrapper = styled.div`
  background-color: #000;
  width: 100%;
  min-height: 1200px;
  border-radius: 8px;
  border: 1px solid red;
  background-color: #181818;
`;

export const Header = styled.div`
  width: 100%;
  position: relative;
`;

export const ImageMask = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  top: 80%;
  background: linear-gradient(0deg, #181818, transparent 50%);
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

export const BriefHeader = styled.div`
  width: 40%;
  position: absolute;
  bottom: 10%;
  left: 5%;
  top: 40%;
  background-color: #333;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const BriefTitle = styled.h1`
  font-size: 1.5rem;
  color: ${COLOR.white[0]};
`;

export const ButtonList = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  button {
    min-width: 7vw;
    display: flex;
    align-items: 2vw;
    font-size: 1rem;
    padding: 0.5rem 1rem 0.5rem 0.6rem;

    svg {
      font-size: 1.2rem;
    }
  }
`;
