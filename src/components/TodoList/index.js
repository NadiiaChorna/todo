import React from 'react';
import TodoListItem from 'src/components/TodoListItem';

import './styles.scss';

const TodoList = ({ todoData }) => (
  <ul className="list-group todo-list">
    {
      todoData.map((todoTask) => {
        const { id, ...taskDetails } = todoTask;

        return (
          <li key={id} className="list-group-item">
            <TodoListItem {...taskDetails} />
          </li>
        )
      })
    }
  </ul>
);

export default TodoList;
