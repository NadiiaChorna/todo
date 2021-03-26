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
      this.createTodoItem('Drink Coffee'),
      this.createTodoItem('Make Awesome App'),
      this.createTodoItem('Do exercises'),
      this.createTodoItem('Learn smth'),
      this.createTodoItem('Work'),
    ],
    searchCriteria: '',
    filter: 'all'
  }

  filterTaskList = (todoData) => {
    switch(this.state.filter) {
      case 'all':
        return todoData;
      case 'active':
        return todoData.filter(el => !el.done)
      case 'done':
        return todoData.filter(el => el.done)
      default:
        return todoData;
    }
  }

  onFilterChange = (filter) => this.setState({ filter });

  createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: shortid.generate()
    }
  };

  toggleProperty = (todoData, id, property) => ({
    todoData: todoData.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          [property]: !task[property]
        }
      }

      return task;
    })
  });

  onSearchHandler = (e) => {
    this.setState(({ todoData }) => ({
      searchCriteria: e.target.value,
    }));
  }

  onTaskDelete = (currentId) => {
    this.setState(({ todoData }) => ({
      todoData: todoData.filter(({ id }) => id !== currentId),
    }));
  };

  addItemHandler = (newTask) => {
    const taskObject = this.createTodoItem(newTask);

    this.setState(({ todoData }) => ({
      todoData: [...todoData, taskObject],
    }));
  }

  onToggleImportant = (currentId) => {
    this.setState(({ todoData }) => this.toggleProperty(todoData, currentId, 'important'))
  };

  onToggleDone = (currentId) => {
    this.setState(({ todoData }) => this.toggleProperty(todoData, currentId, 'done'))
  };

  render() {
    const { todoData, searchCriteria, filter } = this.state;
    const doneCount = todoData.filter(el => el.done).length;
    const todoCount = todoData.filter(el => !el.done).length;
    const searchResults = todoData.filter(({ label }) => label.toLowerCase().includes(searchCriteria.toLowerCase()));
    const dataToRender = this.filterTaskList(searchResults);

    return (
      <div className="todo-app">
        <AppHeader doneCount={doneCount} todoCount={todoCount} />
        <div className="top-panel d-flex">
          <SearchPanel value={searchCriteria} onSearchHandler={this.onSearchHandler} />
          <ItemStatusFilter onFilterChange={this.onFilterChange} filter={filter} />
        </div>
        <TodoList
          todoData={dataToRender}
          onTaskDelete={this.onTaskDelete}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
        />
        <AddItemForm addItemHandler={this.addItemHandler} />
      </div>
    );
  }
};
