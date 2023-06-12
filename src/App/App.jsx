import React, { useState } from 'react';
import './App.css';
import Button from './components/ui/Button/Button';


function App() {
  const [counter, setCounter] = useState(0)

  return (
    <div className='App'>
      Voici la valeur de counter : {counter}
      <br />
      <Button className='error' onClick={() => {
        setCounter(counter - 1)
        console.log(`counter `, counter);
      }}>-1</Button>
      <Button onClick={() => {
        setCounter(counter + 1)
        console.log(`counter `, counter);
      }}>+1</Button>
    </div>
  );
}

export default App;
