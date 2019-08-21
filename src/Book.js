import React from 'react';
import PropTypes from 'prop-types';

function Book({ title, authors, coverImage }) {
  return (
    <div className="book">
      <img className="book-cover" src={coverImage} alt={title} />
      <h3 className="book-title">{title}</h3>
      <p className="book-authors">{authors}</p>
    </div>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  authors: PropTypes.arrayOf(PropTypes.string),
  coverImage: PropTypes.string
};

export default Book;
