import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

function Bookshelf({ title, books }) {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <ul className="books-grid">
        {books.map((book) => (
          <Book
            key={book.id}
            title={book.title}
            authors={book.authors}
            coverImage={book.imageLinks.thumbnail}
          />
        ))}
      </ul>
    </div>
  );
}

Bookshelf.propTypes = {
  title: PropTypes.string.isRequired,
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      authors: PropTypes.arrayOf(PropTypes.string),
      imageLinks: PropTypes.shape({
        thumbnail: PropTypes.string
      })
    })
  )
};

export default Bookshelf;
