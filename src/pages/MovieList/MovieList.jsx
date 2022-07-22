/* eslint-disable no-unused-vars */
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { API_KEY, base_img_url, BASE_URL, fetchData } from '../../api/request';
import { Footer, MovieSection, Navbar } from '../../components';
import MovieDetail from '../../components/MovieDetail/MovieDetail';
import Loader from './Loader/Loader';
import {
  MovieListContainer,
  SliderContainer,
  SliderItem,
  SliderMask,
  SliderOuter,
  SliderWrapper,
  Title,
  Wrapper
} from './MovieList.style';
import { useDispatch, useSelector } from 'react-redux';
import { addVideos, setMovie } from '../../redux';
import { useParams } from 'react-router-dom';

const MovieList = () => {
  const [movies, setMovies] = useState();
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [sliderWidth, setSliderWidth] = useState(0);
  const [totalInViewport, setTotalInViewport] = useState(0);
  const [distance, setDistance] = useState(0);
  const [viewed, setViewed] = useState(0);
  const [hasPrev, setHasPrev] = useState(false);
  const [hasNext, setHasNext] = useState(true);

  const sliderRef = useRef();
  const sliderContainerRef = useRef(0);

  const movieType = useParams().movietype;

  const search = useSelector((state) => state.search);
  const dispatch = useDispatch();
  const { fetchPopular, fetchNowPlaying } = fetchData;

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
    console.log(sliderRef);
    if (!loading) {
      if (screen.width <= 768) {
        containerWidth = sliderRef.current.clientWidth + sliderRef.current.clientWidth * 0.05;
      } else {
        containerWidth = sliderRef.current.clientWidth + (sliderRef.current.clientWidth * 0.12) / 3;
      }

      setSliderWidth(containerWidth);
      setTotalInViewport(Math.floor(containerWidth / sliderRef.current.clientWidth));
      setHasPrev(distance < 0);
      setHasNext(viewed + totalInViewport < 5);
    }
  }, [sliderContainerRef, distance]);

  useEffect(() => {
    setLoading(true);
    let URL;
    switch (movieType) {
      case 'tvshows':
        URL = `${BASE_URL}/tv/popular`;
        break;
      case 'nowplaying':
        URL = `${BASE_URL}/movie/now_playing`;
        break;
      case 'popular':
        URL = `${BASE_URL}/movie/popular`;
        break;
      case 'toprated':
        URL = `${BASE_URL}/movie/top_rated`;
        break;
      default:
        URL = `${BASE_URL}/movie/now_playing`;
    }

    const movieArray = new Array();

    const fetchMovies = async () => {
      try {
        for (let index = 1; index < 5; index++) {
          const res = await axios.get(URL, {
            params: {
              api_key: API_KEY,
              page: index
            }
          });
          movieArray.push({ id: index, data: res.data.results });
        }
        setMovies(movieArray);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovies();
  }, [movieType, search]);

  useEffect(() => {
    setLoading(true);
    const movieArray = new Array();
    const searchMovie = async () => {
      try {
        for (let index = 1; index < 5; index++) {
          const res = await axios.get(`${BASE_URL}/search/movie`, {
            params: {
              api_key: API_KEY,
              page: index,
              query: search
            }
          });
          movieArray.push({ id: index, data: res.data.results });
        }
        setMovies(movieArray);
        setTimeout(setLoading(false), 3000);
      } catch (error) {
        console.log(error);
      }
    };
    if (search !== '') {
      searchMovie();
    }
  }, [search]);

  return (
    <Wrapper>
      {open && <MovieDetail open={open} setOpen={setOpen} />}
      {loading ? (
        <Loader />
      ) : (
        <>
          <MovieListContainer>
            {movies.map((item) => (
              <SliderOuter key={item.id}>
                <Title>{`List ${item.id}`}</Title>
                <SliderContainer ref={sliderContainerRef}>
                  {hasPrev && (
                    <SliderMask style={{ left: 0 }} onClick={() => handlePrev()}>
                      <FontAwesomeIcon icon={faAngleLeft} />
                    </SliderMask>
                  )}

                  <SliderWrapper ref={sliderRef} style={slideProps}>
                    {item?.data.map((movie) => (
                      <>
                        <SliderItem key={movie.id} onClick={() => showDetail(movie.id)}>
                          <img src={`${base_img_url}${movie.backdrop_path}`} />
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
              </SliderOuter>
            ))}
          </MovieListContainer>
        </>
      )}

      <Footer />
    </Wrapper>
  );
};

export default MovieList;
