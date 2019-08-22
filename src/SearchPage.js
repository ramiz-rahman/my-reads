import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';
import Bookshelf from './Bookshelf';

class SearchPage extends Component {
  state = {
    query: 'Art',
    books: []
  };

  componentDidMount() {
    BooksAPI.search(this.state.query).then((books) =>
      this.setState({ books })
    );
  }
  render() {
    return (
      <div>
        {this.state.books && (
          <Bookshelf
            books={this.state.books}
            shelves={['heLLO', 'FuckYOU', 'MOther']}
          />
        )}
      </div>
    );
  }
}

export default SearchPage;
