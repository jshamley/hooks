import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';

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

Name.propTypes = {
  updateName: PropTypes.func.isRequired
};

export default Name;
