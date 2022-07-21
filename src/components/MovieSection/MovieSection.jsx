import React, { useEffect, useRef, useState } from 'react';
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
import { API_KEY, base_img_url, BASE_URL } from '../../api/request';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setMovie } from '../../redux/movie/movieSlice';
import { addVideos } from '../../redux';

const MovieSection = ({ title, setOpen, method }) => {
  const sliderRef = useRef();
  const sliderContainerRef = useRef(0);

  const [movies, setMovies] = useState();
  const [sliderWidth, setSliderWidth] = useState(0);
  const [totalInViewport, setTotalInViewport] = useState(0);
  const [distance, setDistance] = useState(0);
  const [viewed, setViewed] = useState(0);
  const [hasPrev, setHasPrev] = useState(false);
  const [hasNext, setHasNext] = useState(true);

  const dispatch = useDispatch();

  const handlePrev = () => {
    setViewed(viewed - totalInViewport);
    setDistance(distance + sliderWidth);
  };

  const handleNext = () => {
    setViewed(viewed + totalInViewport);
    setDistance(distance - sliderWidth);
  };

  const slideProps = {
    transform: `translate3d(${distance}px, 0, 0)`
  };

  const showDetail = async (id) => {
    const detailRes = await axios.get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
    dispatch(setMovie(detailRes.data));
    const videoRes = await axios.get(`${BASE_URL}/movie/${detailRes.data.id}/videos`, {
      params: {
        api_key: API_KEY,
        append_to_response: 'videos'
      }
    });
    dispatch(addVideos(videoRes.data.results));
    setOpen(true);
  };

  useEffect(() => {
    let containerWidth;
    if (screen.width <= 768) {
      containerWidth = sliderRef.current.clientWidth + sliderRef.current.clientWidth * 0.05;
    } else {
      containerWidth = sliderRef.current.clientWidth + (sliderRef.current.clientWidth * 0.12) / 3;
    }

    setSliderWidth(containerWidth);
    setTotalInViewport(Math.floor(containerWidth / sliderRef.current.clientWidth));
    setHasPrev(distance < 0);
    setHasNext(viewed + totalInViewport < 5);
  }, [sliderContainerRef, distance]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await axios.get(method, {
          params: {
            page: 1
          }
        });
        setMovies(res.data.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovies();
  }, []);

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
          {movies?.map((item) => (
            <>
              <SliderItem key={item.id} onClick={() => showDetail(item.id)}>
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
