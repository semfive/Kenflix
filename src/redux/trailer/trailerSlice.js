import { createSlice } from '@reduxjs/toolkit';

export const trailerSlice = createSlice({
  name: 'trailer',
  initialState: {},
  reducers: {
    setTrailer: (state, action) => {
      return (state = action.payload);
    }
  }
});

export const { setTrailer } = trailerSlice.actions;
export default trailerSlice.reducer;
