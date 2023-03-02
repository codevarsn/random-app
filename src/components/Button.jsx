import React, { useState } from 'react';
import quotes from '../quotes.json'


const Button = () => {
const colors = ["#845EC2", "#D65DB1", "#FF6F91", "#FF9671", "#FFC75F", "#F9F871"];
const randomColor = Math.floor(Math.random() * colors.length)
document.body.style = `background: ${colors[randomColor]}`
const [index, setIndex] = useState(Math.floor(Math.random() * quotes.length));


const changeQuote = () => {
  setIndex(Math.floor(Math.random() * quotes.length));
  document.body.style = `background: ${colors[randomColor]}`
}
const phrase = () => {
  const randomColor = Math.floor(Math.random() * colors.length)
  document.body.style = `background: ${colors[randomColor]}`
}

  return (
    <div>
      <ul>
        <p style={{ color: `${colors[randomColor]}` }}>{quotes[index].phrase}</p>
        <h4 style={{ color: `${colors[randomColor]}` }}>{quotes[index].author}</h4>
        <button className='button' onClick={changeQuote} style={{ background: `${colors[randomColor]}` }}>
          <i className="fa-solid fa-shuffle"></i>
        </button>
      </ul>
    </div>
  );
};

export default Button;