import React, { useState } from 'react'
import ReactionTest from './components/ReactionTest.jsx'
import Squares from './components/Squares.jsx'
import DisplayResult from './components/DisplayResult.jsx'

function App() {
  const [start, setStart] = useState({
    visibility: true,
    result: false
  });

  const [click, setClick] = useState({
    clicked: 0
  });

  const [ex, setEx] = useState([]);

  return (
    <div className='App'>
      {start.visibility && <ReactionTest start={start} setStart={setStart} />}
      {!start.visibility && (
        <Squares click={click} setClick={setClick} ex={ex} setEx={setEx} />
      )}

      <DisplayResult
        result={start.result}
        click={click}
        setStart={setStart}
        setClick={setClick}
        setEx={setEx}
      />
    </div>
  );
}

export default App;
