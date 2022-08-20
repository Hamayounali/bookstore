import React from 'react';
import Navbar from './Navbar';
import AddBooks from './AddBook';

function Books() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="bookList">
          <br />
          <div className="card bg-light text-dark">
            <div className="card-body">
              <h6> Action</h6>
              <h4>Book Name</h4>
              <h6> Author Name</h6>
              <button type="button" className="btn btn-light">Comment</button>
              {' '}
              |
              <button type="button" className="btn btn-light">Remove</button>
              {' '}
              |
              <button type="button" className="btn btn-light">Edit</button>
            </div>
          </div>
        </div>
        <div className="addNewBook">
          <AddBooks />
        </div>
      </div>

    </div>
  );
}

export default Books;
