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

  render() {
    console.log(this.state.books[0]);
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
        />
        <Bookshelf
          title="Want to Read"
          books={this.state.books.filter(
            (book) => book.shelf === 'wantToRead'
          )}
        />
        <Bookshelf
          title="Read"
          books={this.state.books.filter(
            (book) => book.shelf === 'read'
          )}
        />
      </div>
    );
  }
}

export default App;
