/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

function Book({ title, author, id }) {
  const dispatch = useDispatch();
  return (
    <div className="container">
      <div className="bookList">
        <br />
        <div className="card bg-light text-dark">
          <div className="card-body">

            <article className="post-excerpt">
              <h4>{title}</h4>
              <p className="post-content">{author.substring(0, 100)}</p>
            </article>

            <button type="button" className="btn btn-light">Comment</button>

            {' '}
            |
            <button type="button" className="btn btn-light" onClick={() => dispatch(removeBook(id))}>Remove</button>
            {' '}
            |
            <button type="button" className="btn btn-light">Edit</button>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Book;
