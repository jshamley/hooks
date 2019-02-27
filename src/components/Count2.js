import React, { Fragment, useState, useEffect } from 'react';
let isLoaded = false;

const Count = props => {
  const [count, setCount] = useState(0);

  if (!isLoaded) {
    console.warn('hello');
    isLoaded = true;
  }

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]);

  useEffect(() => {
    const button2 = document.getElementById('secondary-button');
    button2.addEventListener('click', doTheThing);

    return () => {
      // this is our component will unmount
      // used for cleaning up
      button2.removeEventListener('click', doTheThing);
    };
  });

  function doTheThing() {
    alert('Whoa! Calm down.');
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
