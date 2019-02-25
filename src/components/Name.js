import React, { Fragment, useState } from 'react';

const Name = props => {
  const [name, setName] = useState('Tommy Bahama');

  return (
    <Fragment>
      <p>
        Your name is <b>{name}</b>
      </p>
      <p>
        <input
          type="text"
          value={name}
          onChange={e => {
            setName(e.target.value);
            props.updateName(e.target.value);
          }}
        />
      </p>
    </Fragment>
  );
};

export default Name;
