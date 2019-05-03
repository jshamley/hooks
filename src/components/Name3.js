import React, { Fragment, useState, useReducer } from 'react';
import PropTypes from 'prop-types';

const initialState = { name: 'Tommy Bahama', otherName: 'Jimmy Hoffa' };

function reducer(state, action) {
  switch (action.type) {
    case 'name':
      return { ...state, name: action.value };
    case 'otherName':
      return { ...state, otherName: action.value };
    default:
      return state;
  }
}

const Name = props => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const updateName = e => {
    const n = e.target.value;
    const newName = n.replace('Geo', 'Je');
    dispatch({ type: 'name', value: newName });
    props.updateName(newName);
  };

  return (
    <Fragment>
      <p>
        Your name is <b>{state.name}</b>,<br />
        but their name is <b>{state.otherName}</b>
      </p>
      <p>
        <input type="text" value={state.name} onChange={updateName} />
        <br />
        <input
          type="text"
          value={state.otherName}
          onChange={e => dispatch({ type: 'otherName', value: e.target.value })}
        />
      </p>
    </Fragment>
  );
};

Name.propTypes = {
  updateName: PropTypes.func.isRequired
};

export default Name;
