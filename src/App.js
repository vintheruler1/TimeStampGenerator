import React, { useState } from 'react';
import './App.css';
import TimeInput from './TimeInput';

function App() {
  const [timestamp, setTimestamp] = useState('');

  const handleTimeSubmit = (userDate, userTime) => {
    if (!userDate || !userTime) {
      alert('Please enter both date and time.');
      return;
    }

    const userDateTime = new Date(`${userDate}T${userTime}`);
    const unixTimestamp = Math.floor(userDateTime.getTime() / 1000);
    setTimestamp(unixTimestamp);
  };

  return (
    <div className="App">
      <h1>Unix Timestamp Generator</h1>
      <TimeInput onTimeSubmit={handleTimeSubmit} />
      {timestamp !== '' && <p>Generated Unix Timestamp: {timestamp}</p>}
    </div>
  );
}

export default App;
