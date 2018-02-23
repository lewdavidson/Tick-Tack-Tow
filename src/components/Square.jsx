import React from 'react';
import '../index.css';
import PropTypes from 'prop-types';


function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}
Square.propTypes = {
  value: PropTypes.any,
  onClick: PropTypes.func
}
export default Square;
