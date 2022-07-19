import { configureStore } from '@reduxjs/toolkit';
import movieReducer from './movie/movieSlice';
import trailerReducer from './trailer/trailerSlice';
import videosReducer from './videos/videosSlice';

export default configureStore({
  reducer: {
    movie: movieReducer,
    trailer: trailerReducer,
    videos: videosReducer
  }
});
