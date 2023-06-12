import React from 'react';
import './App.css';
import Button from './components/ui/Button/Button';


function App() {
  return (
    <div className="App">
      <Button bgColor='green' onClick={(unParamDeLenfnant) => {
        console.log('envoyé par le parent', unParamDeLenfnant)
      }}><img src='/img/ok.jpg' alt='Ok'/> ok</Button>
      <Button bgColor='red'>cancel</Button>
    </div>
  );
}

export default App;
