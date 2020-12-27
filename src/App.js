import React, { useState } from 'react';

import Parent from './components/Parent';

import CounterContext from './CounterContext';

import './App.css';

function App() {

  const countState = useState(1);

  return (
    <CounterContext.Provider value={countState}>
      <div className="App">
        <Parent />
      </div>
    </CounterContext.Provider>
  );
}

export default App;
