import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

class Bookshelf extends Component {
  state = { dropArea: false };

  handleDragOver = (e) => {
    e.preventDefault();
  };

  handleDragEnter = (e) => {
    e.preventDefault();
    this.setState({ dropArea: true });
  };

  handleDragLeave = (e) => {
    e.preventDefault();
    this.setState((prevState) => {
      return { dropArea: false };
    });
  };

  _getDropAreaClass = () => {
    let classes = ['drop-area'];
    if (!this.state.dropArea) classes.push('hidden');
    return classes.join(' ');
  };

  render() {
    const {
      title,
      books,
      shelves,
      onMove,
      onDrop,
      shelfName,
      dnd
    } = this.props;

    let dropAreaClass = this._getDropAreaClass();
    return (
      <div
        className="bookshelf"
        onDragEnter={this.handleDragEnter}
        onDragOver={this.handleDragOver}
        onDrop={(e) => {
          this.handleDragLeave(e);
          onDrop(e, shelfName);
        }}
      >
        {title && <h2 className="bookshelf-title">{title}</h2>}
        <div
          className={dropAreaClass}
          onDragLeave={(e) => this.handleDragLeave(e)}
        >
          <p>Move book to shelf: {title}</p>
        </div>
        <ul className="books-grid">
          {books.map((book) => (
            <Book
              key={book.id}
              id={book.id}
              shelves={shelves}
              onMove={onMove}
              draggable={dnd}
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
  dnd: PropTypes.bool,
  onMove: PropTypes.func,
  onDrop: PropTypes.func
};

export default Bookshelf;
