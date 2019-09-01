import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';
import Bookshelf from './Bookshelf';
import SearchBar from './SearchBar';

class SearchPage extends Component {
  state = {
    query: '',
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
            />
          ) : (
            <h2>
              No Books Found. Search for a category. (e.g. Poetry)
            </h2>
          )}
        </div>
      </div>
    );
  }
}

export default SearchPage;
