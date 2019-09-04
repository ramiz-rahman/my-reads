import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';
import Bookshelf from './Bookshelf';
import { Link } from 'react-router-dom';

class Homepage extends Component {
  state = {
    books: [],
    shelves: ['currentlyReading', 'wantToRead', 'read', 'none']
  };

  async componentDidMount() {
    const books = await BooksAPI.getAll();
    if (books) this.setState({ books });
  }

  handleMove = (id, newShelf) => {
    this.setState((prevState) => {
      return {
        books: prevState.books.map((book) => {
          if (book.id === id) {
            book.shelf = newShelf;
          }
          return book;
        })
      };
    });
  };

  handleDrop = (e, shelf) => {
    const id = e.dataTransfer.getData('text');
    this.handleMove(id, shelf);
    BooksAPI.update(
      this.state.books.find((book) => book.id === id),
      shelf
    );
  };

  render() {
    const shelves = this.state.shelves;
    const currentlyReading = this.state.books.filter(
      (book) => book.shelf === 'currentlyReading'
    );
    const wantToRead = this.state.books.filter(
      (book) => book.shelf === 'wantToRead'
    );
    const read = this.state.books.filter(
      (book) => book.shelf === 'read'
    );
    return (
      <div>
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <Bookshelf
          title="Currently Reading"
          books={currentlyReading}
          shelfName="currentlyReading"
          shelves={shelves}
          onMove={this.handleMove}
          onDrop={this.handleDrop}
        />
        <Bookshelf
          title="Want to Read"
          books={wantToRead}
          shelfName="wantToRead"
          shelves={shelves}
          onMove={this.handleMove}
          onDrop={this.handleDrop}
        />
        <Bookshelf
          title="Read"
          books={read}
          shelfName="read"
          shelves={shelves}
          onMove={this.handleMove}
          onDrop={this.handleDrop}
        />
        <Link className="open-search" to="/search">
          <button />
        </Link>
      </div>
    );
  }
}

export default Homepage;
