import React from 'react';
import './App.css';
import Button from './components/ui/Button/Button';


function App() {
  return (
    <div className="App">
      <Button text="cancel"></Button>
      <Button><img src='/img/ok.jpg'/></Button>
    </div>
  );
}

export default App;
