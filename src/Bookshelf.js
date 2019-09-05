import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

class Bookshelf extends Component {
  state = { dropArea: false };

  handleDragOver = (e) => {
    e.preventDefault();
    this.setState({ dropArea: true });
  };

  handleDragLeave = (e) => {
    e.preventDefault();
    this.setState({ dropArea: false });
  };

  _getDropAreaClass = () => {
    let classes = ['drop-area', 'hidden'];
    if (this.state.dropArea) classes.pop();
    return classes.join(' ');
  };

  render() {
    const {
      title,
      books,
      shelves,
      onMove,
      onDrop,
      shelfName
    } = this.props;

    let dropAreaClass = this._getDropAreaClass();
    return (
      <div className="bookshelf" onDragOver={this.handleDragOver}>
        {title && <h2 className="bookshelf-title">{title}</h2>}
        <div
          className={dropAreaClass}
          onDragLeave={(e) => this.handleDragLeave(e)}
          onDrop={(e) => {
            this.handleDragLeave(e);
            onDrop(e, shelfName);
          }}
        >
          <p>Move book to this shelf!</p>
        </div>
        <ul className="books-grid">
          {books.map((book) => (
            <Book
              key={book.id}
              id={book.id}
              shelves={shelves}
              onMove={onMove}
            />
          ))}
        </ul>
      </div>
    );
  }
}

Bookshelf.propTypes = {
  title: PropTypes.string,
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired
  ),
  shelfName: PropTypes.string,
  shelves: PropTypes.arrayOf(PropTypes.string),
  onMove: PropTypes.func,
  onDrop: PropTypes.func
};

export default Bookshelf;
