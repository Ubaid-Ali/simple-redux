import React, { useState } from 'react';
import './App.css';
import Input from '../Input/Input'
import Output from '../Output/Output'

function App() {

  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <Output counter={counter} />
      <Input counter={counter} setCounter={setCounter} />
    </div>
  );
}

export default App;
