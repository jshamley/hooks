import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';

const Name = props => {
  const [name, setName] = useState('Tommy Bahama');
  const [otherName, setOtherName] = useState('Jimmy Hoffa');

  const updateName = e => {
    const name = e.target.value;
    const newName = name.replace('Geo', 'Je');
    setName(newName);
    props.updateName(name);
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

Name.propTypes = {
  updateName: PropTypes.func.isRequired
};

export default Name;
