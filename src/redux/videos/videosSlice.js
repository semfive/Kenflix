import { createSlice } from '@reduxjs/toolkit';

export const videosSlice = createSlice({
  name: 'videos',
  initialState: [],
  reducers: {
    addVideos: (state, action) => {
      return (state = action.payload);
    }
  }
});

export const { addVideos } = videosSlice.actions;
export default videosSlice.reducer;
