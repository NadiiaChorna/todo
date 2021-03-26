import React from 'react';
import shortid from 'shortid';

import AppHeader from 'src/components/AppHeader';
import SearchPanel from 'src/components/SearchPanel';
import TodoList from 'src/components/TodoList';
import ItemStatusFilter from 'src/components/ItemStatusFilter';

import './styles.scss';

const App = () => {

  const todoData = [
    { label: 'Drink Coffee', important: false, id: shortid.generate() },
    { label: 'Make Awesome App', important: true, id: shortid.generate() },
    { label: 'Have a lunch', important: false, id: shortid.generate() }
  ];

  return (
    <>
      <AppHeader />
      <div className="top-panel d-flex">
      <SearchPanel />
      <ItemStatusFilter />
      </div>
      <TodoList todoData={todoData} />
    </>
  );
};

export default App;
