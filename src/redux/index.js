import { setMovie, deleteMovie } from './movie/movieSlice';
import { setTrailer } from './trailer/trailerSlice';
import { addVideos } from './videos/videosSlice';
import { addAccounts, deleteAccount, editAccount, getAccount } from './accounts/accountsSlice';
import { setSearch } from './search/searchSlice';

export {
  setMovie,
  setTrailer,
  addVideos,
  deleteMovie,
  addAccounts,
  deleteAccount,
  editAccount,
  getAccount,
  setSearch
};
