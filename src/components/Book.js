/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import { removeBookApi } from '../redux/books/books';
import 'react-circular-progressbar/dist/styles.css';

function Book({ title, author, id }) {
  const dispatch = useDispatch();
  const value1 = Math.floor(Math.random() * 100) + 1;
  return (
    <div className="bookList">
      <div className="Lesson-Panel container">
        <div className="row">
          <div className="col-sm-5">
            <div className="card-body">

              <article className="post-excerpt">
                <span className="School-of">
                  Action
                </span>
                <h4 className="Title">{title}</h4>
                <p className="post-content author">{author}</p>
              </article>

              <button type="button" className="button">Comment</button>

              {' '}
              |
              <button type="button" className="button" onClick={() => dispatch(removeBookApi(id))}>Remove</button>
              {' '}
              |
              <button type="button" className="button">Edit</button>
            </div>
          </div>
          <div className="col-sm-1">
            <div className="Rectangle-3">
              <CircularProgressbarWithChildren value={value1} />
            </div>
          </div>
          <div className="col-sm-2">
            <p className="-Percent-Complete">
              {value1}
              %
            </p>
            <p className="Completed Text-Style-2">
              Completed
            </p>
          </div>
          <div className="col-sm-1">
            <div className="Line-2" />
          </div>
          <div className="col-sm-3">
            <p className="Current-Chapter">
              CURRENT CHAPTER
            </p>
            <p className="Current-Lesson Text-Style-4">
              Chapter 17
            </p>
            <button className="btn btn-primary Rectangle-2" type="button">
              UPDATE PROGRESS
            </button>

          </div>
        </div>
      </div>
    </div>

  );
}

export default Book;
