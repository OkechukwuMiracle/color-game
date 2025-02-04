// import React from 'react'
import PropTypes from "prop-types"



const ColorOption = ({ colors, onGuess }) => {
    return (
      <div>
        {colors.map((color, index) => (
          <button 
          className="color-option"
            key={index} 
            style={{ backgroundColor: color, marginInline: "5px", marginBlock: "2%", width: "30%", fontSize: "1rem", fontWeight: "700", borderRadius: "15px",
              boxShadow: "10px 17px 17px rgb(10, 10, 10, 0.3",
              filter: "drop-shadow(0 4px 5px  rgb(23, 20, 20))",   }} 
            onClick={() => onGuess(color)}
            data-testid="colorOption"
          >
            {color}
          </button>
        ))}
      </div>
    );
  };

  ColorOption.propTypes = {
    colors: PropTypes.arrayOf(PropTypes.string).isRequired,
    onGuess: PropTypes.func.isRequired, 
 }

export default ColorOption