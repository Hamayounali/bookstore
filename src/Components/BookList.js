import React from 'react';
import Books from './Books';

class getBooks extends React.PureComponent() {
  constructor(props) {
    super(props);
    this.state = {
      BookList: [],
    };
  }

  render() {
    return (
      <div>
        <Books BookList={this.state.BookList} />
      </div>
    );
  }
}

export default getBooks;
