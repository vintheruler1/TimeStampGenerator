import React, { useState } from 'react';

const TimeInput = ({ onTimeSubmit }) => {
  const [userDate, setUserDate] = useState('');
  const [userTime, setUserTime] = useState('');

  const handleDateChange = (event) => {
    setUserDate(event.target.value);
  };

  const handleTimeChange = (event) => {
    setUserTime(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!userDate || !userTime) {
      alert('Please enter both date and time.');
      return;
    }
    onTimeSubmit(userDate, userTime);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Enter your local date:
          <input type="date" value={userDate} onChange={handleDateChange} />
        </label>
        <br />
        <label>
          Enter your local time:
          <input type="time" value={userTime} onChange={handleTimeChange} />
        </label>
        <br />
        <button type="submit">Generate Timestamp</button>
      </form>
    </div>
  );
};

export default TimeInput;
