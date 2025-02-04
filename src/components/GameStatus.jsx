// import React from 'react'
import PropTypes from "prop-types"

const GameStatus = ({ status }) => {
    return <p data-testid="gameStatus">{status}</p>;
  };

  GameStatus.propTypes = {
    status: PropTypes.string.isRequired,
  };

export default GameStatus