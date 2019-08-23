import React from 'react';
import PropTypes from 'prop-types';
import Selector from './Selector';

function Book({
  id,
  title,
  authors,
  coverImage,
  shelf,
  shelves,
  onMove
}) {
  return (
    <div className="book">
      <div className="book-top">
        <img className="book-cover" src={coverImage} alt={title} />
        <div className="book-shelf-changer">
          <Selector
            categories={shelves}
            defaultCategory={shelves.includes(shelf) ? shelf : 'none'}
            bookId={id}
            onMove={onMove}
          />
        </div>
      </div>
      <h3 className="book-title">{title}</h3>
      <p className="book-authors">{authors}</p>
    </div>
  );
}

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  authors: PropTypes.arrayOf(PropTypes.string),
  coverImage: PropTypes.string,
  shelf: PropTypes.string,
  shelves: PropTypes.arrayOf(PropTypes.string),
  onMove: PropTypes.func
};

export default Book;
