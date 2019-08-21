import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import Book from './Book';

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
        <div className="bookshelf">
          <h2 className="bookshelf-title">Currently Reading</h2>
          <ul className="books-grid">
            {this.state.books
              .filter((book) => book.shelf === 'currentlyReading')
              .map((book) => (
                <Book
                  key={book.id}
                  title={book.title}
                  authors={book.authors}
                  coverImage={book.imageLinks.thumbnail}
                />
              ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
