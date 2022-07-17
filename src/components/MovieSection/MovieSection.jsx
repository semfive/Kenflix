/* eslint-disable no-unused-vars */
import React, { createRef, useEffect, useRef, useState } from 'react';
import {
  SliderContainer,
  SliderItem,
  SliderMask,
  SliderWrapper,
  Title,
  Wrapper
} from './MovieSection.style';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { base_img_url } from '../../api/request';

const MovieSection = ({ title, movies, setTop, setLeft }) => {
  const sliderRef = useRef();
  const sliderContainerRef = useRef(0);
  const [sliderWidth, setSliderWidth] = useState(0);
  const [totalInViewport, setTotalInViewport] = useState(0);
  const [distance, setDistance] = useState(0);
  const [viewed, setViewed] = useState(0);
  const [hasPrev, setHasPrev] = useState(false);
  const [hasNext, setHasNext] = useState(true);

  const handlePrev = () => {
    setViewed(viewed - totalInViewport);
    setDistance(distance + sliderWidth);
    console.log(totalInViewport);
    console.log(viewed);
  };

  const handleNext = () => {
    setViewed(viewed + totalInViewport);
    setDistance(distance - sliderWidth);
    console.log(sliderRef.current.clientWidth);
  };

  const slideProps = {
    transform: `translate3d(${distance}px, 0, 0)`
  };

  const showDetail = (event) => {
    // console.log(event.target);
  };

  useEffect(() => {
    const containerWidth =
      sliderRef.current.clientWidth + (sliderRef.current.clientWidth * 0.12) / 3;

    setSliderWidth(containerWidth);
    setTotalInViewport(Math.floor(containerWidth / sliderRef.current.clientWidth));
    setHasPrev(distance < 0);
    setHasNext(viewed + totalInViewport < 5);
  }, [sliderContainerRef, distance]);

  return (
    <Wrapper>
      <Title>{title ? title : 'Title'}</Title>
      <SliderContainer ref={sliderContainerRef}>
        {hasPrev && (
          <SliderMask style={{ left: 0 }} onClick={() => handlePrev()}>
            <FontAwesomeIcon icon={faAngleLeft} />
          </SliderMask>
        )}

        <SliderWrapper ref={sliderRef} style={slideProps}>
          {movies?.map((item, index) => (
            <>
              <SliderItem key={item.id} onMouseEnter={showDetail}>
                <img src={`${base_img_url}${item.backdrop_path}`} />
              </SliderItem>
            </>
          ))}
        </SliderWrapper>
        {hasNext && (
          <SliderMask style={{ right: 0 }} onClick={() => handleNext()}>
            <FontAwesomeIcon icon={faAngleRight} />
          </SliderMask>
        )}
      </SliderContainer>
    </Wrapper>
  );
};

export default MovieSection;
