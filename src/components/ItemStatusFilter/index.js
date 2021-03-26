import React from 'react';

import './styles.scss';

const ItemStatusFilter = ({ filter, onFilterChange }) => {
  const buttons = [
    { name: 'all', label: 'All' },
    { name: 'active', label: 'Active' },
    { name: 'done', label: 'Done' }
  ]

  return (
    <div className="btn-group mb-3">
      {
        buttons.map(({ name, label }) => {
          const btnClass = (name === filter) ? 'btn-info' : 'btn-outline-secondary';
          return <button type="button" onClick={() => onFilterChange(name)} className={`btn ${btnClass}`}>{label}</button>
        })
      }
    </div>
  );
};

export default ItemStatusFilter;
