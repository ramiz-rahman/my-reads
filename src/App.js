import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';

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
                <li key={book.id} className="book">
                  <img
                    className="book-cover"
                    src={book.imageLinks.thumbnail}
                    alt={book.title}
                  />
                  <h3 className="book-title">{book.title}</h3>
                  <p className="book-authors">{book.authors}</p>
                </li>
              ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
