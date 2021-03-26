import React from 'react';
import ReactDOM from 'react-dom';

// const el = <h1>Hi</h1>;

const el = React.createElement('h1', { className: 'greet' }, 'Hi')

ReactDOM.render(el, document.getElementById('todo-app'));
