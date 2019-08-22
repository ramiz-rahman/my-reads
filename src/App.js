import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import Bookshelf from './Bookshelf';

class App extends Component {
  state = {
    books: []
  };

  async componentDidMount() {
    const books = await BooksAPI.getAll();
    if (books) this.setState({ books });
    //BooksAPI.getAll().then((books) => this.setState({ books }));
  }

  handleMove = (e, id, newShelf) => {
    e.preventDefault();
    const book = this.state.books.find((book) => book.id === id);
    BooksAPI.update(book, newShelf).then(
      this.setState((prevState) => {
        return {
          books: prevState.books.map((book) => {
            if (book.id === id) {
              book.shelf = newShelf;
            }
            return book;
          })
        };
      })
    );
  };

  render() {
    console.log(this.state.books[0]);
    const shelves = Array.from(
      this.state.books.reduce((shelves, book) => {
        shelves.add(book.shelf);
        return shelves;
      }, new Set())
    );
    console.log(shelves);
    return (
      <div className="App">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <Bookshelf
          title="Currently Reading"
          books={this.state.books.filter(
            (book) => book.shelf === 'currentlyReading'
          )}
          shelves={shelves}
          onMove={this.handleMove}
        />
        <Bookshelf
          title="Want to Read"
          books={this.state.books.filter(
            (book) => book.shelf === 'wantToRead'
          )}
          shelves={shelves}
          onMove={this.handleMove}
        />
        <Bookshelf
          title="Read"
          books={this.state.books.filter(
            (book) => book.shelf === 'read'
          )}
          shelves={shelves}
          onMove={this.handleMove}
        />
      </div>
    );
  }
}

export default App;
