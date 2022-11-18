import React from 'react'

const ReactionTest = ({ start, setStart }) => {
  const handleClick = e => {
    e.preventDefault();

    setTimeout(() => {
      console.log('tree')
      const res = setStart({
        visibility: false,
        result: true
      });

      return res;
    }, 5000);

    setStart({
      visibility: false,
      result: false
    });
  }

  const visibility = start.visibility ? 'visible' : 'hidden';
  const transition = start.visibility ? '0.1s linear' : 'none';

  return (
    <div className='name' style={{ visibility }}>
      <p className='heading'>
        <span>React</span>ion Test
      </p>
      <div className='btn' onClick={handleClick} style={{ transition }}>
        Start
      </div>
    </div>
  );
}

export default ReactionTest;