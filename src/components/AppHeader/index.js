import React from 'react';
import './styles.scss';

const AppHeader = ({ doneCount, todoCount }) => {
  return (
    <div className="app-header d-flex">
      <h1>Todo List</h1>
      <h4>{todoCount} more to do, {doneCount} done</h4>
    </div>
  );
};

export default AppHeader;
