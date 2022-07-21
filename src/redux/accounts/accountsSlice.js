import { createSlice } from '@reduxjs/toolkit';

export const accountsSlice = createSlice({
  name: 'accounts',
  initialState: [],
  reducers: {
    addAccounts: (state, action) => {
      return (state = action.payload);
    },
    deleteAccount: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    editAccount: (state, action) => {
      const newState = state.map((item) => {
        if (item.id !== action.payload.id) {
          return item;
        } else {
          return action.payload;
        }
      });
      return newState;
    }
  }
});

export const { addAccounts, deleteAccount, getAccount, editAccount } = accountsSlice.actions;
export default accountsSlice.reducer;
