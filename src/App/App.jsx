import React from 'react';
import './App.css';
import Button from './components/ui/Button/Button';


function App() {
  return (
    <div className="App">
      <Button
        className='primary'
        onClick={(unParamDeLenfnant) => {
          console.log('envoyé par le parent', unParamDeLenfnant)
        }}><img src='/img/ok.jpg' alt='Ok' /> ok</Button>
      <Button
        className='error'
      >cancel</Button>
    </div>
  );
}

export default App;
