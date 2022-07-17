import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  background-color: #000;
  position: relative;
  overflow: hidden;
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
    z-index: 2;

    background: linear-gradient(
      180deg,
      transparent,
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0.8),
      rgba(0, 0, 0, 1)
    );
  }
`;
export const TrailerOverlay = styled.div`
  background: linear-gradient(77deg, rgba(0, 0, 0, 0.6), transparent 85%);
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 30%;
  z-index: 1;
`;

export const TrailerContent = styled.div`
  position: absolute;
  top: 25%;
  left: 5%;
  height: 100%;
  width: 35%;
  z-index: 5;
  display: flex;
  flex-direction: column;
  color: #fff;
`;

export const Title = styled.div`
  font-weight: bold;
  font-size: 2rem;
`;

export const Description = styled.div`
  max-width: inherit;
  word-wrap: break-word;
  text-align: left;
  font-size: 1.2vw;
  font-weight: 400;
  margin: 1.2vw 0;
`;

export const TrailerAction = styled.div`
  display: flex;
  margin-top: 1.2vw;
  gap: 10px;
  button {
    border: none;
    width: unset;
    padding: 1rem 2rem;
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
  }
`;

export const MovieListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
  margin: 3vw 0;
`;
