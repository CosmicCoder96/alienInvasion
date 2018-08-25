import React from 'react';
import PropTypes from 'prop-types';

const PlusOne = (props) => {
  const scoreStyle = {
    fontFamily: '"Joti One", cursive',
    fontSize: 40,
    fill: '#d6d33e',
  };

  return (
    <g filter="url(#shadow)">
      <text style={scoreStyle} x={props.position.x} y={props.position.y}>
        +1
      </text>
    </g>
  );
};

// CurrentScore.propTypes = {
//   score: PropTypes.number.isRequired,
// };

export default PlusOne;