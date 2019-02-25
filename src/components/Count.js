import React, { Fragment, useState, useEffect } from 'react';

const Count = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]);

  return (
    <Fragment>
      <p>
        You have clicked the button <b>{count} times</b>.
      </p>
      <p>
        <button onClick={() => setCount(count + 1)}>Add Count</button>{' '}
      </p>
    </Fragment>
  );
};

export default Count;
