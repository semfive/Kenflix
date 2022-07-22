import styled, { keyframes } from 'styled-components';

const scaleDown = keyframes`
  from{
    opacity: 1;
  }
  to{
    opacity: 0;
    z-index: -1;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  background-color: #000;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  .scaleDownTitle {
    transform-origin: left bottom;
    transform: scale(0.8)
      translate3d(0px, ${({ scaleHeight }) => `${scaleHeight}px` || '64px'}, 0px);
    transition-duration: 1300ms;
    transition-delay: 5000ms;
  }

  .scaleDownDescription {
    animation: ${scaleDown} 1 ease forwards;
    animation-delay: 5000ms;
  }
`;

export const Trailer = styled.div`
  width: 100%;
  height: 50vw;
  overflow: hidden;
  position: relative;
  & > img {
    width: 100%;
    height: auto;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
  }
  div.img-overlay {
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    top: 70%;

    background: linear-gradient(
      180deg,
      transparent,
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0.8),
      rgba(0, 0, 0, 1)
    );
  }

  #trailer-ytb {
    display: ${({ play }) => (play ? 'block' : 'none')};
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    pointer-events: none;
  }
`;
export const TrailerOverlay = styled.div`
  background: linear-gradient(77deg, rgba(0, 0, 0, 0.6), transparent 85%);
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 30%;
  z-index: 2;
`;

export const TrailerContent = styled.div`
  position: absolute;
  top: 40%;
  left: 5%;
  height: 100%;
  width: 35%;
  z-index: 5;
  display: flex;
  flex-direction: column;
  color: #fff;
  @media (max-width: 992px) {
    width: 40%;
  }
  @media (max-width: 575px) {
    top: 40%;
  }
`;

export const Title = styled.div`
  font-weight: bold;
  font-size: 3rem;
  @media (max-width: 992px) {
    font-size: 2.5rem;
  }
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const Description = styled.div`
  max-width: inherit;
  text-align: left;
  font-size: 1.2vw;
  line-height: 1.2vw;
  font-weight: 400;
  margin: 1.2vw 0;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;

  @media (max-width: 768px) {
    font-size: 1vw;
  }
  @media (max-width: 575px) {
    width: 80%;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;

    /* max-height: 4.8vw; */
    overflow: hidden;
  }
`;

export const TrailerAction = styled.div`
  display: flex;
  margin-top: 1.2vw;
  gap: 10px;
  button {
    border: none;
    width: unset;
    padding: 1rem 2rem;
    display: flex;
    align-items: center;
    font-size: 1.2rem;
    svg {
      margin-right: 5px;
    }
    &:first-child {
      background-color: #fff;
      color: #000;
    }

    &:nth-child(2) {
      background-color: rgba(109, 109, 110, 0.7);
      color: #fff;
      svg {
        font-size: 17px;
      }
    }

    @media (max-width: 992px) {
      font-size: 1rem;
      padding: 0.5rem 1.5rem;
    }
    @media (max-width: 768px) {
      padding: 0.4rem 0.7rem;
    }
    @media (max-width: 575) {
      font-size: 0.8rem;
      padding: 0.4rem 1rem;
    }
  }
`;

export const MovieListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
  z-index: 10;
  margin-bottom: 80px;
`;
