import React, { Fragment, useState } from 'react';

const Count = props => {
  const [count, setCount] = useState(0);

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
