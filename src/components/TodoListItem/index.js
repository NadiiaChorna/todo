import React from 'react';

import './styles.scss';

const TodoListItem = ({
  done,
  important,
  label,
  onTaskDelete,
  onToggleImportant,
  onToggleDone
}) => (
  <span className={`d-flex todo-list-item${done ? ' done' : ''}${important ? ' important' : ''}`}>
    <span
      className="flex-grow-1 todo-list-item-label"
      onClick={onToggleDone}
    >
      {label}
    </span>

    <button
      type="button"
      className="btn btn-outline-success btn-sm float-right"
      onClick={onToggleImportant}
    >
      <i className="fa fa-exclamation" />
    </button>

    <button
      type="button"
      className="btn btn-outline-danger btn-sm float-right"
      onClick={onTaskDelete}
    >
      <i className="fa fa-trash-o" />
    </button>
  </span>
);

export default TodoListItem;
