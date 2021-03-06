import React, { PropTypes } from 'react';

const Greeting = (props) => {
  return <div>Hi, {props.name}!</div>;
};

Greeting.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Greeting;
