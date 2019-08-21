import React from 'react';
import PropTypes from 'prop-types';

function camelToTitleCase(text) {
  const words = text
    .replace(/([A-Z])/g, ' $1')
    .trim()
    .split(' ');
  return words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

function Selector({ categories, defaultCategory }) {
  return (
    <select defaultValue={defaultCategory}>
      <option disabled>Move to ...</option>
      {categories.map((category) => (
        <option key={category} value={category}>
          {camelToTitleCase(category)}
        </option>
      ))}
      <option value="none">None</option>
    </select>
  );
}

Selector.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string),
  defaultCategory: PropTypes.string
};

export default Selector;
