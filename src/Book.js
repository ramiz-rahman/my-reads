import React from 'react';
import PropTypes from 'prop-types';
import Selector from './Selector';

function Book({ title, authors, coverImage, shelf, shelves }) {
  return (
    <div className="book">
      <div className="book-top">
        <img className="book-cover" src={coverImage} alt={title} />
        <div className="book-shelf-changer">
          <Selector categories={shelves} defaultCategory={shelf} />
        </div>
      </div>
      <h3 className="book-title">{title}</h3>
      <p className="book-authors">{authors}</p>
    </div>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  authors: PropTypes.arrayOf(PropTypes.string),
  coverImage: PropTypes.string,
  shelf: PropTypes.string,
  shelves: PropTypes.arrayOf(PropTypes.string)
};

export default Book;
