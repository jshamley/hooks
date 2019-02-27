import React, { Fragment, useEffect, useState } from 'react';
import useStatus from '../hooks/status';

const Todo = props => {
  const isActive = useStatus();
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    console.log(isActive);
    setTodo(['test', 'test2']);
  }, []);

  return (
    <Fragment>
      {todo.length > 0 &&
        todo.map(t => {
          return <p key={t}>{t}</p>;
        })}
    </Fragment>
  );
};

export default Todo;
