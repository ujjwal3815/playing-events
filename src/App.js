import React, { useState } from 'react';
import './style.css';

const App = () => {
  const purple = '#800080';
  const [bg, setBg] = useState(purple);
  const [message, setMessage] = useState('Click Me');

  const nextBg = () => {
    let newBg = 'red';
    setBg(newBg);
    setMessage('nikal pehli fursat me !');
  };

  const welKm = () => {
    let final = 'white';
    setBg(final);
    setMessage('aao thakur');
  };
  return (
    <>
      <div style={{ backgroundColor: bg }}>
        <button onClick={nextBg} onDoubleClick={welKm}>
          {message}
        </button>
      </div>
    </>
  );
};

export default App;
