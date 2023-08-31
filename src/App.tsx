import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Dice } from './Dice';

function App() {
  const [numDice, setNumDice] = useState<number[]>([])

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => setNumDice([...numDice, 1])}>Add +</button>
        <button onClick={() => {
          setNumDice(numDice.slice(0,-1))
        }}>Remove -</button>
        <div>
        {numDice.map((junk) => {
          return <Dice key={junk}/>
        })}
        </div>
        <Dice />
      </header>
    </div>
  );
}

export default App;
