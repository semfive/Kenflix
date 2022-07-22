import { configureStore } from '@reduxjs/toolkit';
import accountsReducer from './accounts/accountsSlice';
import movieReducer from './movie/movieSlice';
import trailerReducer from './trailer/trailerSlice';
import videosReducer from './videos/videosSlice';
import searchReducer from './search/searchSlice';

export default configureStore({
  reducer: {
    movie: movieReducer,
    trailer: trailerReducer,
    videos: videosReducer,
    accounts: accountsReducer,
    search: searchReducer
  }
});
