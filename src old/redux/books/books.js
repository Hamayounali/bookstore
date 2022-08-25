import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const postsSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    postAdded(state, action) {
      state.push(action.payload);
    },
    deleteBook(state, action) {
      // eslint-disable-next-line no-param-reassign
      state.value = state.value.filter((post) => post.id !== action.payload.id);
    },
  },
});

export const { postAdded, deleteBook } = postsSlice.actions;
export default postsSlice.reducer;
