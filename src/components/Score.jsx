// import React from 'react'
import PropTypes from "prop-types"

const Score = ({ score }) => {
    return <p data-testid="score">Score: {score}</p>;
  };

  Score.propTypes = {
    score: PropTypes.number.isRequired,
  };

//   Score.defaultProps = {
//     score: 0,
//   };
  

export default Score