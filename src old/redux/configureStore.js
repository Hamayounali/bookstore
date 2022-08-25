import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './books/books';

const store = configureStore({
  reducer: {
    // checkStatus: checkReducer,
    books: postsReducer,
  },
});

export default store;
