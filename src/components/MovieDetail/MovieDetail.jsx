import {
  BriefHeader,
  BriefTitle,
  ButtonList,
  DetailBody,
  DetailPreview,
  Header,
  Image,
  Overlay,
  PreviewLeft,
  PreviewRight,
  Wrapper
} from './MovieDetail.style';
import { base_img_url } from '../../api/request';
import Button from '../Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus, faPlay, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { useRef, useState } from 'react';
import useClickOutside from '../../hooks/useClickOutside';
import YouTube from 'react-youtube';
import { useSelector } from 'react-redux';

const MovieDetail = ({ setOpen }) => {
  const detailRef = useRef();

  const [play, setPlay] = useState(false);
  const [player, setPlayer] = useState();
  const [buttonClick, setClick] = useState(true);

  const movie = useSelector((state) => state.movie);
  const videos = useSelector((state) => state.videos);

  const [opts] = useState({
    playerVars: {
      controls: 0,
      autoplay: 0,
      end: 20,
      modestbranding: 1,
      rel: 0
    }
  });

  useClickOutside(detailRef, () => {
    setPlay(false);
    setOpen(false);
  });

  const playTrailer = () => {
    setPlay(true);
    if (buttonClick && player) {
      player.playVideo();
      setClick((prev) => !prev);
    } else {
      player.pauseVideo();
      setClick((prev) => !prev);
    }
  };

  const renderTrailer = () => {
    const trailer = videos[0];
    if (trailer) {
      return (
        <YouTube
          videoId={trailer.key}
          id={'video-ytb'}
          title={'Aloasdasd'}
          opts={opts}
          onReady={(event) => setPlayer(event.target)}
          onEnd={(event) => {
            console.log(event);
            event.target.seekTo(0);
            setClick(true);
            setPlay(false);
          }}
        />
      );
    }
  };

  return (
    <>
      <Overlay>
        <Wrapper ref={detailRef}>
          <Header play={play}>
            <Image src={`${base_img_url}${movie.backdrop_path}`} />
            {videos && renderTrailer()}
            <BriefHeader>
              <BriefTitle>{movie?.title}</BriefTitle>
              <ButtonList>
                <Button onClick={playTrailer}>
                  <FontAwesomeIcon icon={faPlay} />
                  <span>Play</span>
                </Button>
                <FontAwesomeIcon icon={faCirclePlus} className="add-btn" />
                <FontAwesomeIcon icon={faThumbsUp} className="like-btn" />
              </ButtonList>
            </BriefHeader>
          </Header>
          <DetailBody>
            <DetailPreview>
              <PreviewLeft>
                <div className="video-overview">
                  <span className="vote">{movie.vote_count} votes</span>
                  <span>{movie.release_date}</span>
                  <span className="rating">{movie.vote_average}</span>
                  <span>
                    {Math.floor(movie.runtime / 60)}h{movie.runtime % 60}
                  </span>
                </div>
                <div className="overview">{movie.overview}</div>
                <div></div>
              </PreviewLeft>
              <PreviewRight>
                <ul className="right-overview">
                  <li>
                    <span className="rightTitle">Cast:</span>{' '}
                  </li>
                  <li>
                    <span className="rightTitle">Genres:</span>
                    {movie.genres.map((item, index) => {
                      if (index === movie.genres.length - 1) {
                        return (
                          <span className="preview-text" key={item.id}>
                            {item.name}
                          </span>
                        );
                      } else {
                        return (
                          <span className="preview-text" key={item.id}>
                            {item.name},
                          </span>
                        );
                      }
                    })}
                  </li>
                  <li>
                    <span className="rightTitle">Production Companies:</span>{' '}
                    {movie.production_companies.map((item, index) => {
                      if (index === 3) {
                        return (
                          <span className="preview-text" key={item.id}>
                            {item.name}
                          </span>
                        );
                      } else if (index < 3) {
                        return (
                          <span className="preview-text" key={item.id}>
                            {item.name},
                          </span>
                        );
                      }
                    })}
                  </li>
                </ul>
              </PreviewRight>
            </DetailPreview>
          </DetailBody>
          {/* <DetailFooter>
              <h1></h1>
            </DetailFooter> */}
        </Wrapper>
      </Overlay>
    </>
  );
};

export default MovieDetail;
