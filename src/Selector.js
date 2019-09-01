import React from 'react';
import PropTypes from 'prop-types';
import { camelToTitleCase } from './Utils';

function Selector({ categories, defaultCategory, onMove }) {
  return (
    <select
      value={defaultCategory}
      onChange={(e) => onMove(e, e.target.value)}
    >
      <option disabled>Move to ...</option>
      {categories.map((category) => (
        <option key={category} value={category}>
          {camelToTitleCase(category)}
        </option>
      ))}
    </select>
  );
}

Selector.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string),
  defaultCategory: PropTypes.string,
  onMove: PropTypes.func
};

export default Selector;
