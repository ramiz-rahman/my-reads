import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';
import Bookshelf from './Bookshelf';
import SearchBar from './SearchBar';

class SearchPage extends Component {
  state = {
    query: 'a',
    books: [],
    shelves: ['currentlyReading', 'wantToRead', 'read', 'none']
  };

  componentDidMount() {
    BooksAPI.search(this.state.query).then((books) =>
      books && Array.isArray(books)
        ? this.setState({ books })
        : this.setState({ books: [] })
    );
  }

  handleSearch = (e) => {
    e.preventDefault();
    const query = e.target.value;
    this.setState({ query });
    BooksAPI.search(query).then((books) =>
      books && Array.isArray(books)
        ? this.setState({ books })
        : this.setState({ books: [] })
    );
  };

  handleMove = (id, newShelf) => {
    this.setState((prevState) => prevState.books);
  };

  render() {
    return (
      <div>
        <SearchBar
          onSearch={this.handleSearch}
          value={this.state.query}
        />
        <div className="search-books-results">
          {this.state.books.length !== 0 ? (
            <Bookshelf
              books={this.state.books}
              shelves={this.state.shelves}
              onMove={this.handleMove}
            />
          ) : (
            <h2>No books found</h2>
          )}
        </div>
      </div>
    );
  }
}

export default SearchPage;
