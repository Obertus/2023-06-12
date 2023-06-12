import React, { useState, useEffect } from 'react';
import './App.css';
import Button from './components/ui/Button/Button';


function App() {
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    // console.log(`value post setCounter`, counter);
    return () => {
      //   effect
      console.log(`cleanup`);
    };
  }, [counter])

  
  useEffect(() => {
    console.log(`création du composant set des états initiaux`);
    setCounter(1)
  }, [])

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
