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
import { API_KEY, base_img_url, BASE_URL, fetchData } from '../../api/request';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo, faPlay } from '@fortawesome/free-solid-svg-icons';
import MovieSection from '../../components/MovieSection/MovieSection';
import { Button } from '../../components';
import MovieDetail from '../../components/MovieDetail/MovieDetail';
import YouTube from 'react-youtube';
import { useDispatch, useSelector } from 'react-redux';
import { setTrailer } from '../../redux/index';

const HomePage = () => {
  const [trailerVideo, setTrailerVideo] = useState();
  const [open, setOpen] = useState(false);
  const [play, setPlay] = useState(false);
  const [player, setPlayer] = useState();
  const [buttonClick, setClick] = useState(true);
  const { fetchTopRated, fetchPopular, fetchUpcoming } = fetchData;
  const trailer = useSelector((state) => state.trailer);
  const dispatch = useDispatch();

  const [opts] = useState({
    playerVars: {
      controls: 0,
      autoplay: 0,
      end: 20,
      modestbranding: 1
    }
  });

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

  const playTrailer = () => {
    setPlay(true);
    if (buttonClick && player) {
      player.playVideo();
      document.getElementById('trailer-title').classList.add('scaleDownTitle');
      document.getElementById('trailer-description').classList.add('scaleDownDescription');
      setClick((prev) => !prev);
    } else {
      player.pauseVideo();
      setClick((prev) => !prev);
    }
  };

  const renderTrailer = () => {
    const trailer = trailerVideo.results[0];
    if (trailer) {
      return (
        <YouTube
          videoId={trailer.key}
          id={'trailer-ytb'}
          title={'Aloasdasd'}
          opts={opts}
          onReady={(event) => setPlayer(event.target)}
          onEnd={(event) => {
            console.log(event);
            event.target.seekTo(0);
            event.target.pauseVideo();
            setClick(true);
            setPlay(false);
            document.getElementById('trailer-title').classList.remove('scaleDownTitle');
            document.getElementById('trailer-description').classList.remove('scaleDownDescription');
          }}
        />
      );
    }
  };

  useEffect(() => {
    const randomTrailer = Math.floor((Math.random() + 100) * 100);

    const fetchTrailer = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/movie/${randomTrailer}`, {
          params: {
            api_key: API_KEY
          }
        });
        dispatch(setTrailer(res.data));
      } catch (error) {
        console.log(error);
      }
    };

    const fetchVideos = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/movie/${randomTrailer}/videos`, {
          params: {
            api_key: API_KEY,
            append_to_response: 'videos'
          }
        });
        setTrailerVideo(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTrailer();
    fetchVideos();
  }, []);

  return (
    <Wrapper>
      {open && <MovieDetail open={open} setOpen={setOpen} />}
      <div>
        <Navbar navItems={navItems} />
      </div>
      <Trailer play={play}>
        <img src={`${base_img_url}${trailer?.backdrop_path}`} />
        <div className="img-overlay"></div>
        {trailerVideo && renderTrailer()}
        <TrailerOverlay />
        <TrailerContent>
          <Title id="trailer-title">{trailer?.title}</Title>
          <Description id="trailer-description">{trailer?.overview}</Description>
          <TrailerAction>
            <Button onClick={playTrailer}>
              <FontAwesomeIcon icon={faPlay} /> Play
            </Button>
            <Button>
              <FontAwesomeIcon icon={faCircleInfo} />
              <span>More Info</span>
            </Button>
          </TrailerAction>
        </TrailerContent>
      </Trailer>
      <MovieListContainer>
        <MovieSection title={'Trending Now'} method={fetchPopular} setOpen={setOpen} />
        <MovieSection
          title={'Exciting TV Action & Adventure'}
          method={fetchTopRated}
          setOpen={setOpen}
        />
        <MovieSection title={'Upcoming'} method={fetchUpcoming} setOpen={setOpen} />
      </MovieListContainer>
    </Wrapper>
  );
};

export default HomePage;
