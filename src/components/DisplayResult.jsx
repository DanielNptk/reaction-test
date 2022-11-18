import React from 'react'
import Result from './Result.jsx'

const DisplayResult = ({ result, click, setStart, setClick, setEx }) => {
  if (result) {
    return (
      <Result
        click={click}
        setStart={setStart}
        setClick={setClick}
        setEx={setEx}
      />
    )
  } else {
    return null;
  };
}

export default DisplayResult;