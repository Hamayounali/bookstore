/* eslint-disable max-len */
import { useEffect, React } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import AddBook from './AddBook';
import { fetchBookApi } from '../redux/books/books';

function Books() {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBookApi());
  }, [dispatch]);

  return (
    <>
      {books.map(
        (book) => (
          <Book
            key={book.id}
            id={book.id}
            title={book.title}
            author={book.author}
          />
        ),
      )}
      <AddBook />
    </>
  );
}

export default Books;
