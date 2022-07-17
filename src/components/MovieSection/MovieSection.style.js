import styled, { keyframes } from 'styled-components';
import { COLOR } from '../../utils/color';

const showDetail = keyframes`
  from{
    width: 0;
  }
  to{
    width: 20%;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1vw;
  position: relative;
  * {
    box-sizing: border-box;
  }
  .show {
    display: block;
    animation: ${showDetail} 500ms ease-in-out forwards;
  }
`;

export const Title = styled.div`
  font-size: 1.4vw;
  line-height: 1.25vw;
  color: ${COLOR.white[1]};
  margin-left: 5%;
`;

export const SliderContainer = styled.div`
  width: 100%;
  padding: 0 5%;
  position: relative;
  overflow-x: visible;
`;

export const SliderItem = styled.div`
  flex-shrink: 0;
  position: relative;
  width: 22%;
  overflow: hidden;
  border-radius: 4px;
  display: flex;
  transition: transform 500ms;
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    cursor: grab;
  }
  :hover {
    transform: scale(1.2);
    z-index: 999;
  }

  :hover ~ & {
    transform: translateX(12%);
  }
`;

export const SliderWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  transform: translate3d(0, 0, 0);
  transition: transform 2s ease;
  gap: calc(12% / 3);
`;

export const SliderMask = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  display: flex;
  width: 5%;
  z-index: 1;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.3);

  svg {
    width: 100%;
    font-size: 2rem;
    color: ${COLOR.white[0]};
    transition: transform 300ms ease-in-out;
    display: none;
  }

  :hover {
    cursor: pointer;
    svg {
      display: block;
      transform: scale(1.08);
    }
  }
`;
