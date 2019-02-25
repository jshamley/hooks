import React, { Fragment, useState, useEffect } from 'react';

const Count = props => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;

    const button2 = document.getElementById('secondary-button');
    button2.addEventListener('click', doTheThing);

    return () => {
      button2.removeEventListener('click', doTheThing);
    };
  });

  function doTheThing() {
    alert('Whoa!');
  }

  return (
    <Fragment>
      <p>You have clicked the button {count} times.</p>
      <p>
        <button onClick={() => setCount(count + 1)}>Add Count</button>{' '}
        <button id="secondary-button">Use Effects</button>
      </p>
    </Fragment>
  );
};

export default Count;
