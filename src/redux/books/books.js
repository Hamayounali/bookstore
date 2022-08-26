import axios from 'axios';

const ADD_BOOK = 'bookstore/books/addBook';
const REMOVE_BOOK = 'bookstore/books/removeBook';
const FETCH_BOOK = 'bookstore/books/FETCH_BOOK';
const API_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/MpJdxZM6X5758BRrWuzO/books/';

const initialState = [];

// eslint-disable-next-line default-param-last
const addRemoveReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        action.book,
      ];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);
    case FETCH_BOOK:
      return action.book;
    default:
      return state;
  }
};

const fetchBook = (book) => ({
  type: FETCH_BOOK,
  book,
});

export const addBook = (book) => ({
  type: ADD_BOOK,
  book,
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});

export const fetchBookApi = () => async (dispatch) => {
  const books = await axios.get(API_URL);
  const bookDataFetch = Object.entries(books.data).map((item) => {
    const { title, author } = item[1][0];
    return { id: item[0], title, author };
  });
  dispatch(fetchBook(bookDataFetch));
};

export const removeBookApi = (id) => async (dispatch) => {
  await fetch(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/MpJdxZM6X5758BRrWuzO/books/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  dispatch(removeBook(id));
};

export const storeBookToAPI = (book) => async (dispatch) => {
  const { id, title, author } = book;
  const newBook = {
    item_id: id,
    title,
    author,
    category: 'Fiction',
  };
  await axios.post(API_URL, newBook);
  dispatch(addBook(book));
};

export default addRemoveReducer;
