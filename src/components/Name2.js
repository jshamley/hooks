import React, { Fragment, useState } from 'react';

const Name = props => {
  const [name, setName] = useState('Tommy Bahama');

  const updateName = e => {
    let name = e.target.value.replace(' ', '-');
    setName(name);
  };

  return (
    <Fragment>
      <p>
        Your name is <b>{name}</b>
      </p>
      <p>
        <input type="text" value={name} onChange={updateName} />
      </p>
    </Fragment>
  );
};

export default Name;
