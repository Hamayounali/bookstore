import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Navbar from './Navbar';
import AddBooks from './AddBook';
import { deleteBook } from '../redux/books/books';

function BookList() {
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  const renderedBooks = posts.map((post) => (
    <div className="container">
      <div className="bookList">
        <br />
        <div className="card bg-light text-dark">
          <div className="card-body">

            <article className="post-excerpt" key={post.id}>
              <h4>{post.title}</h4>
              <p className="post-content">{post.author.substring(0, 100)}</p>
            </article>
            <button type="button" className="btn btn-light">Comment</button>
            {' '}
            |
            <button
              onClick={() => {
                dispatch(deleteBook({ id: post.id }));
              }}
              type="button"
              className="btn btn-light"
            >
              Remove
            </button>
            {' '}
            |
            <button type="button" className="btn btn-light">Edit</button>
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <div>
      <Navbar />
      {renderedBooks}
      <div className="addNewBook">
        <AddBooks />
      </div>

    </div>
  );
}

export default BookList;
