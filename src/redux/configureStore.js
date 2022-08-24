import { configureStore } from '@reduxjs/toolkit';
import checkReducer from './categories/categories';
import bookReducer from './books/books';

const store = configureStore({
  reducer: {
    checkStatus: checkReducer,
    books: bookReducer,
  },
});

export default store;
