import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

function Bookshelf({ title, books, shelves, onMove }) {
  return (
    <div className="bookshelf">
      {title && <h2 className="bookshelf-title">{title}</h2>}
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

Bookshelf.propTypes = {
  title: PropTypes.string,
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired
  ),
  shelves: PropTypes.arrayOf(PropTypes.string),
  onMove: PropTypes.func
};

export default Bookshelf;
