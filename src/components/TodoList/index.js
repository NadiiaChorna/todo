import React from 'react';
import TodoListItem from 'src/components/TodoListItem';

import './styles.scss';

const TodoList = ({ todoData, onTaskDelete, onToggleDone, onToggleImportant }) => (
  <ul className="list-group todo-list">
    {
      todoData.map((todoTask) => {
        const { id, isVisible, ...taskDetails } = todoTask;

        return (
          <li key={id} className='list-group-item'>
            <TodoListItem
              {...taskDetails}
              onTaskDelete={() => onTaskDelete(id)}
              onToggleImportant={() => onToggleImportant(id)}
              onToggleDone={() => onToggleDone(id)}
            />
          </li>
        )
      })
    }
  </ul>
);

export default TodoList;
