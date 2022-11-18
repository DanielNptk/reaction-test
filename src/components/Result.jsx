import React from 'react'

const Result = ({ click, setStart, setClick, setEx }) => {
  const handleClick = e => {
    e.preventDefault();

    setStart({
      visibility: true,
      result: false
    });

    setClick({
      ...click,
      clicked: 0
    });

    setEx([]);
  }

  return (
    <div className='canvas'>
      <p className='heading'>
        You clicked {click.clicked} times in thirty seconds
      </p>
      <div className='btn' onClick={handleClick}>
        Try Again
      </div>
    </div>
  );
}

export default Result;