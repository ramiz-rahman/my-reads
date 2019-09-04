import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

function Bookshelf({
  title,
  books,
  shelves,
  onMove,
  onDrop,
  shelfName
}) {
  return (
    <div
      className="bookshelf"
      onDragOver={(e) => e.preventDefault()}
      onDrop={(e) => onDrop(e, shelfName)}
    >
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
      {/* <div
        style={{ height: '300px', backgroundColor: '#F00' }}
        onDragOver={(e) => {
          e.preventDefault();
        }}
        onDrop={(e) => handleDrop(e)}
      /> */}
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
  shelfName: PropTypes.string,
  shelves: PropTypes.arrayOf(PropTypes.string),
  onMove: PropTypes.func,
  onDrop: PropTypes.func
};

export default Bookshelf;
