import React from 'react';
import Books from './Books';

class getBooks extends React.PureComponent() {
  state = {
    BookList: [
      {
        id: 1,
        title: 'Book Title 1',
        author: 'Autor Name 1',
      },
      {
        id: 1,
        title: 'Book Title 2',
        author: 'Autor Name 2',
      },
    ],
  };

  render() {
    return (
      <div>
        <Books BookList={this.state.BookList} />
      </div>
    );
  }
}

export default getBooks;
