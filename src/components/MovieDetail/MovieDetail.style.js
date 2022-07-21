import styled, { keyframes } from 'styled-components';
import { COLOR } from '../../utils/color';

const fadeIn = keyframes`
  from{
    opacity: 0;
  }to{
    opacity: 1;
  }
`;

const appearIn = keyframes`
from{
  transform: scale(0.7);
    opacity: 0;
  }to{
    transform: scale(1);
    opacity: 1;
  }
`;

export const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.4);
  justify-content: center;
  align-self: center;
  padding: 2vw 20vw;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  min-height: 100vh;
  z-index: 999;
  display: flex;
  overflow-y: scroll;
  overflow-x: hidden;
  @media (max-width: 992px) {
    padding: 2vw 16vw;
  }
  @media (max-width: 768px) {
    padding: 2vw 8vw;
  }
  @media (max-width: 575px) {
    padding: 2vw 5vw;
  }
`;

export const Wrapper = styled.section`
  background-color: #000;
  width: 100%;
  border-radius: 8px;
  top: 2vw;
  background-color: #181818;
  height: 1000px;
  animation: ${({ open }) => open && appearIn} 1 ease-in-out 500ms forwards;
  scroll-behavior: smooth;
  overflow: hidden;
`;

export const Header = styled.section`
  width: 100%;
  position: relative;
  overflow: hidden;
  animation: ${({ play }) => !play && fadeIn} 1 ease-in-out 500ms forwards;
  #video-ytb {
    display: ${({ play }) => (play ? 'block' : 'none')};
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    pointer-events: none;
  }

  .close-icon {
    position: absolute;
    top: 20px;
    right: 20px;
    background-color: #181818;
    border-radius: 50%;
    height: 24px;
    padding: 5px;
    width: 24px;
    color: ${COLOR.white[0]};
    cursor: pointer;
  }
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

export const TrailerVideo = styled.video`
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
  /* background-color: #333; */
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
    align-items: center;
    font-size: 1rem;
    padding: 0.2rem 0.7rem;
    background-color: ${COLOR.white[0]};
    border-color: ${COLOR.white[0]};
    color: ${COLOR.primary3};
    :hover {
      background-color: ${COLOR.white[1]};
      border-color: ${COLOR.white[1]};
    }
    svg {
      font-size: 1rem;
    }
    span {
      margin-left: 0.7rem;
    }
  }

  .add-btn,
  .like-btn {
    color: #fff;
    font-size: 1.2rem;
    cursor: pointer;
    :hover {
      color: ${COLOR.white[1]};
    }
  }
`;

export const DetailBody = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0 3em;
`;

export const DetailPreview = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: calc(100% * 2 / 3) calc(100% / 3);
  gap: 2em;
  @media (max-width: 768px) {
    grid-template-columns: 55% 40%;
  }
  @media (max-width: 575px) {
    grid-template-columns: 1fr;
    .right-overview {
      width: 60%;
    }
  }
`;

export const PreviewLeft = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  .video-overview {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 12px;
    color: ${COLOR.white[0]};
    margin: 1em 0;
  }
  .rating {
    border: 1px solid ${COLOR.white[0]};
    padding: 1px 2px;
  }
  .vote {
    color: ${COLOR.green[0]};
  }
  .overview {
    font-size: 12px;
    color: ${COLOR.white[0]};
  }
`;

export const PreviewRight = styled.div`
  width: 100%;
  .right-overview {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 3px;
    margin: 1em 0;
  }
  .rightTitle {
    color: ${COLOR.primary2[3]};
    font-size: 12px;
  }
  .preview-text {
    color: ${COLOR.white[0]};
    font-size: 12px;
  }
`;
