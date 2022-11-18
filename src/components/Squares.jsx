import React, { useState } from 'react'

const Squares = ({ click, setClick }) => {
  const randomX = () => {
    return Math.floor(Math.random() * (window.innerWidth - 100));
  }

  const randomY = () => {
    return Math.floor(Math.random() * (window.innerHeight - 100));
  }

  const [position, setPosition] = useState({
    x: Math.floor(Math.random() * (window.innerWidth - 100)),
    y: Math.floor(Math.random() * (window.innerHeight - 100))
  });

  const handleClick = e => {
    e.preventDefault();

    let x = randomX();
    let y = randomY();

    setPosition(prevPos => ({
      x,
      y
    }));

    setClick({
      ...click,
      clicked: click.clicked + 1
    });
  }

  return (
    <div className='canvas'>
      <div
        className='square'
        style={{ left: position.x, top: position.y }}
        onClick={handleClick}></div>
    </div>
  );
}

export default Squares;