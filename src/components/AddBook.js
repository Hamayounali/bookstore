import { React, useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { storeBookToAPI } from '../redux/books/books';

function AddBook() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const addTitle = (e) => {
    setTitle(e.target.value);
  };

  const addAuthor = (e) => {
    setAuthor(e.target.value);
  };

  const add = (e) => {
    e.preventDefault();
    if (title !== '' && author !== '') {
      const id = nanoid();
      dispatch(storeBookToAPI({ id, title, author }));
      e.target.reset();
    }
  };

  return (
    <div className="container">
      <br />
      <h4>ADD NEW BOOK</h4>
      <form className="add" onSubmit={add}>
        <div className="row">
          <div className="col-sm-7">
            <input type="text" className="form-control" placeholder="Book Title" onChange={addTitle} required />
          </div>
          <div className="col-sm-3">
            <input type="text" className="form-control" placeholder="Book Author" onChange={addAuthor} required />
          </div>
          <div className="col-sm-2">
            <button type="submit" className="btn btn-primary">Add Book</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddBook;
