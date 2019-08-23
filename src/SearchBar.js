import React from 'react';
import { Link } from 'react-router-dom';

function SearchBar({ value, onSearch }) {
  return (
    <div className="search-books-bar">
      <Link to="/" className="close-search" />

      <input type="text" value={value} onChange={(e) => onSearch(e)} />
    </div>
  );
}

export default SearchBar;
