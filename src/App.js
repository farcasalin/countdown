import React, { useEffect, useState } from 'react';
import './App.css';
import moment from 'moment';

function App() {
  const [weddingDate] = useState(moment('2020-10-17 14:00:00'));
  const [timeUntil, setTimeUntil] = useState(calculateTimeToWedding(weddingDate));
  const {months, weeks, days, hours, minutes, seconds} = {...timeUntil};
  
  useEffect(() => {
    setTimeout(() => setTimeUntil(calculateTimeToWedding(weddingDate)), 1000);
  });

  const formated = (
    <>
    <span>{months} luni, </span>
    {weeks !== 0 && <span>{weeks} saptamani, </span>}
    {days !== 0 && <span>{days} zile, </span>}
    <span>{hours} ore, </span>
    <span>{minutes} minute si </span>
    <span>{seconds} secunde</span>
    </>
  )

  return (
    <div className="App">
      <header className="App-header">
        <img src="https://bit.ly/3207Hfb" alt="Noi 2"></img>
        <span>Nunta noastra va fi in:</span>
        <span>{formated}</span>
      </header>
    </div>
  );
}

function calculateTimeToWedding(weddingDate) {
  const now = moment();
  const timeUntil = weddingDate.clone();
  const months = timeUntil.diff(now, 'months');
  const weeks = timeUntil.subtract(months, 'months').diff(now, 'weeks');
  const days = timeUntil.subtract(weeks, 'weeks').diff(now, 'days');
  const hours = timeUntil.subtract(days, 'days').diff(now, 'hours');
  const minutes = timeUntil.subtract(hours, 'hours').diff(now, 'minutes');
  const seconds = timeUntil.subtract(minutes, 'minutes').diff(now, 'seconds');
  
  return {
    months: months,
    weeks: weeks,
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  };
}

export default App;
