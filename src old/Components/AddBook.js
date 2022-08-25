import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';

import { postAdded } from '../redux/books/books';

function AddBooks() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const dispatch = useDispatch();

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onAuthorChanged = (e) => setAuthor(e.target.value);

  const onSavePostClicked = () => {
    if (title && author) {
      dispatch(
        postAdded({
          id: nanoid(),
          title,
          author,
        }),
      );

      setTitle('');
      setAuthor('');
    }
  };

  return (
    <div>
      <div className="container">
        <h4>ADD NEW BOOK</h4>
        <form>
          <div className="row">
            <div className="col-sm-7">
              <input
                type="text"
                id="postTitle"
                name="postTitle"
                value={title}
                onChange={onTitleChanged}
                className="form-control"
                placeholder="Book Titel"
              />
            </div>
            <div className="col-sm-3">
              <input
                id="postContent"
                name="postContent"
                value={author}
                onChange={onAuthorChanged}
                type="text"
                className="form-control"
                placeholder="Author"
              />
            </div>
            <div className="col-sm-2">
              <button type="button" onClick={onSavePostClicked} className="btn btn-primary">Add Book</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddBooks;
