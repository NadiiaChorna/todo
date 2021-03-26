import React, { Component } from 'react';
import shortid from 'shortid';

import AppHeader from 'src/components/AppHeader';
import SearchPanel from 'src/components/SearchPanel';
import TodoList from 'src/components/TodoList';
import ItemStatusFilter from 'src/components/ItemStatusFilter';
import AddItemForm from 'src/components/AddItemForm';

import './styles.scss';

export default class App extends Component {

  state = {
    todoData: [
      { label: 'Drink Coffee', important: false, id: shortid.generate() },
      { label: 'Make Awesome App', important: false, id: shortid.generate() },
    ],
  }

  creareTodoItem = (label) => ({
    label,
    important: false,
    done: false,
    id: shortid.generate()
  });

  onTaskDelete = (currentId) => {
    this.setState(({ todoData }) => ({
      todoData: todoData.filter(({ id }) => id !== currentId),
    }));
  };

  addItemHandler = (newTask) => {
    const taskObject = this.creareTodoItem(newTask);

    this.setState(({ todoData }) => ({
      todoData: [...todoData, taskObject],
    }));
  }

  onToggleImportant = (currentId) => {
    this.setState(({ todoData }) => ({
      todoData: todoData.map((task) => {
        if(task.id === currentId) {
          return {
            ...task,
            important: !task.important
          }
        }

        return task;
      })
    }))
  }

  onToggleDone = (currentId) => {
    this.setState(({ todoData }) => ({
      todoData: todoData.map((task) => {
        if(task.id === currentId) {
          return {
            ...task,
            done: !task.done
          }
        }

        return task;
      })
    }))
  }

  render() {
    const doneCount = this.state.todoData.filter(el => el.done).length;
    const todoCount = this.state.todoData.filter(el => !el.done).length;
    return (
      <div className="todo-app">
        <AppHeader doneCount={doneCount} todoCount={todoCount} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        <TodoList
          todoData={this.state.todoData}
          onTaskDelete={this.onTaskDelete}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
        />
        <AddItemForm addItemHandler={this.addItemHandler} />
      </div>
    );
  }
};
