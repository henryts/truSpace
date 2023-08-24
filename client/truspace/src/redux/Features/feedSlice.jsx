

import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const feedSlice = createSlice({
  name: 'feed',
  initialState,
  reducers: {
    addPost: (state, action) => {
        
      state.unshift(action.payload); // Add the new post to the beginning of the array
    },
  },
});

export const { addPost } = feedSlice.actions;
export default feedSlice.reducer;
