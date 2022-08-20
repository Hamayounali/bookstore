import React from 'react';

function AddBooks() {
  return (
    <div>
      <div className="container">
        <h4>ADD NEW BOOK</h4>
        <form>
          <div className="row">
            <div className="col-sm-7">
              <input type="text" className="form-control" placeholder="Book Titel" name="bookTitle" />
            </div>
            <div className="col-sm-3">
              <input type="password" className="form-control" placeholder="Author" name="author" />
            </div>
            <div className="col-sm-2">
              <button type="submit" className="btn btn-primary">Add Book</button>
            </div>
          </div>
        </form>

      </div>

    </div>
  );
}

export default AddBooks;
