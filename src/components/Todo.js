import React, { Fragment, useEffect, useState } from 'react';
import useHttp from '../hooks/http';
let loaded = false;

const Todo = props => {
  const [todo, setTodo] = useState([]);

  useEffect(
    () =>
      setTodo(
        useHttp('https://jsonplaceholder.typicode.com/todos').then(res => {
          console.log(res);
        })
      ),
    [loaded]
  );

  useEffect(() => {
    console.log(todo);
  }, [todo]);

  loaded = true;
  console.log(todo);

  return (
    <Fragment>
      {todo.length}
      {todo.length > 0 &&
        todo.map(t => {
          console.log(t);
          return <p>{t.title}</p>;
        })}
    </Fragment>
  );
};

export default Todo;
