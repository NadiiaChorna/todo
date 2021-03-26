import React from 'react';

import './styles.scss';

const SearchPanel = ({ value, onSearchHandler }) => (
  <input
    type="text"
    onChange={onSearchHandler}
    className="form-control mb-3 mr-2 search-input"
    placeholder="Type to search"
    value={value}
  />
);

export default SearchPanel;