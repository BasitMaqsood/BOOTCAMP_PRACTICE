import React, { useState } from 'react';

import Message from './components/Message';
import Button from './components/button';
import LightButton from './components/lightButton';
import LightStatus from './components/lightStatus';

import './App.css';

function App() {

  const [count, setCount] = useState(0);
  const [isLight, setLight] = useState(false);

  // const handleUpdateCount = () => {
  //   setCount(count++);
  // }

  const handleUpdateLight = () => {
    setLight(!isLight);
  }

  return (
    <div className={`App box ${isLight ? 'day-light' : ''} `}>
      <Message count={count} />
      <LightStatus isLight={isLight} />
      <Button onClickCount={setCount} counter={count} />
      <LightButton onClickLight={handleUpdateLight} />
    </div>
  );
}

export default App;
