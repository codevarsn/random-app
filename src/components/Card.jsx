
import Button from './Button';
import React, { useState } from 'react';

const Card = () => {

  const colors = ["#845EC2", "#D65DB1", "#FF6F91", "#FF9671", "#FFC75F", "#F9F871"];
  const randomColor = Math.floor(Math.random()*colors.length)
  document.body.style = `background: ${colors [randomColor]}`
  
 
  return (
    
    <div style={{color: randomColor}}>
      
      <Button/>

    </div>
  );
};

export default Card;