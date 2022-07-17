import React, { useEffect, useState } from 'react';
import {
  BriefHeader,
  BriefTitle,
  ButtonList,
  Header,
  Image,
  ImageMask,
  Overlay,
  Wrapper
} from './MovieDetail.style';
import axios from 'axios';
import { base_img_url } from '../../api/request';
import Button from '../Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus, faPlay } from '@fortawesome/free-solid-svg-icons';

const MovieDetail = () => {
  const [movie, setMovie] = useState();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/movie/550`, {
        params: {
          api_key: process.env.REACT_APP_TMDB_KEY
        }
      })
      .then((res) => {
        setMovie(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(movie);
  return (
    <Overlay>
      <Wrapper>
        <Header>
          <Image src={`${base_img_url}${movie?.backdrop_path}`} />
          <ImageMask />
          <BriefHeader>
            <BriefTitle>{movie?.title}</BriefTitle>
            <ButtonList>
              <Button>
                <FontAwesomeIcon icon={faPlay} />
                <span>Play</span>
              </Button>
              <Button>
                <FontAwesomeIcon icon={faCirclePlus} />
              </Button>
            </ButtonList>
          </BriefHeader>
        </Header>
      </Wrapper>
    </Overlay>
  );
};

export default MovieDetail;
