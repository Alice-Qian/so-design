import React from 'react';
import './App.css';
import { useState, useEffect } from 'react'
import Hello from './component/Hello'

function App() {
  const [count] = useState(0)
  const [message] = useState('test')

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit{count}
        </p>
        <Hello message={message}></Hello>
      </header>
    </div >
  );
}

export default App;
