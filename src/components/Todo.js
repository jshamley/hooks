import React, { Fragment, useState } from 'react';
import useStatus from '../hooks/status';

const Todo = props => {
  const [status, setStatus] = useState(false);
  const isActive = useStatus(status);

  return (
    <Fragment>
      <p>The status is {isActive.toString()}</p>
      <button onClick={() => setStatus(!status)}>Change the status</button>
    </Fragment>
  );
};

export default Todo;
