import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import {
  Description,
  MovieListContainer,
  Title,
  Trailer,
  TrailerAction,
  TrailerContent,
  TrailerOverlay,
  Wrapper
} from './HomePage.style';
import { base_img_url, fetchData } from '../../api/request';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo, faPlay } from '@fortawesome/free-solid-svg-icons';
import MovieSection from '../../components/MovieSection/MovieSection';
import { Button } from '../../components';
import MovieDetail from '../../components/MovieDetail/MovieDetail';

const HomePage = () => {
  // eslint-disable-next-line no-unused-vars
  const [movies, setMovies] = useState();
  // eslint-disable-next-line no-unused-vars
  const [top10, setTop10] = useState();
  const [popular, setPopular] = useState();
  const [upcoming, setUpcoming] = useState();
  const { fetchTopRated, fetchPopular, fetchUpcoming } = fetchData;

  const navItems = [
    {
      name: 'Home',
      value: 'Home'
    },
    {
      name: 'TV Shows',
      value: 'TV Shows'
    },
    {
      name: 'Movies',
      value: 'Movies'
    },
    {
      name: 'New',
      value: 'New'
    },
    {
      name: 'My List',
      value: 'My List'
    }
  ];

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/movie/550`, {
        params: {
          api_key: process.env.REACT_APP_TMDB_KEY
        }
      })
      .then((res) => {
        setMovies(res.data);
      })
      .catch((err) => console.log(err));

    axios
      .get(fetchTopRated, {
        params: {
          page: 1
        }
      })
      .then((res) => {
        setTop10(res.data.results);
      })
      .catch((err) => console.log(err));

    axios
      .get(fetchPopular, {
        params: {
          page: 1
        }
      })
      .then((res) => {
        setPopular(res.data.results);
      })
      .catch((err) => console.log(err));

    axios
      .get(fetchUpcoming, {
        params: {
          page: 1
        }
      })
      .then((res) => {
        setUpcoming(res.data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Wrapper>
      <div>
        <Navbar navItems={navItems} />
      </div>
      <Trailer>
        <img src={`${base_img_url}${movies?.backdrop_path}`} />
        <div className="img-overlay"></div>

        <TrailerOverlay />
        <TrailerContent>
          <Title>{movies?.title}</Title>
          <Description>{movies?.overview}</Description>
          <TrailerAction>
            <Button>
              <FontAwesomeIcon icon={faPlay} /> Play
            </Button>
            <Button>
              <FontAwesomeIcon icon={faCircleInfo} />
              More Info
            </Button>
          </TrailerAction>
        </TrailerContent>
      </Trailer>
      <MovieListContainer>
        <MovieSection title={'Trending Now'} movies={top10} />
        <MovieSection title={'Exciting TV Action & Adventure'} movies={popular} />
        <MovieSection title={'Upcoming'} movies={upcoming} />
      </MovieListContainer>
      <MovieDetail />
    </Wrapper>
  );
};

export default HomePage;
