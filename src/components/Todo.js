import React, { Fragment, useState } from 'react';

const Todo = props => {
  const [todo, setTodo] = useState(null);

  fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => {
      setTodo(json);
      console.error(json);
    });

  return <Fragment>{todo && todo}</Fragment>;
};

export default Todo;
