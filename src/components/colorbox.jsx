// import React from 'react'

const colorbox = ({ color, fade }) => {
    return (
      <div 
        data-testid="colorBox"
        className={`color-box ${fade ? "fade" : ""}`}
        style={{
          width: "150px",
          height: "150px",
          backgroundColor: color,
          borderRadius: "20px",
          margin: "20px auto",
          
        }}
      />
    );
  };

export default colorbox