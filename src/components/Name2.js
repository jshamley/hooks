import React, { Fragment, useState } from 'react';

const Name = props => {
  const [name, setName] = useState('Tommy Bahama');
  const [otherName, setOtherName] = useState('Jimmy Hoffa');

  const updateName = e => {
    const name = e.target.value;
    const newName = name.replace('Geo', 'Je');
    setName(newName);
  };

  return (
    <Fragment>
      <p>
        Your name is <b>{name}</b>,<br />
        but their name is <b>{otherName}</b>
      </p>
      <p>
        <input type="text" value={name} onChange={updateName} />
        <br />
        <input type="text" value={otherName} onChange={e => setOtherName(e.target.value)} />
      </p>
    </Fragment>
  );
};

export default Name;
