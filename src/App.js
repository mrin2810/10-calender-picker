import React, { useState } from 'react';
import './App.css';

const calendarDates = Array(31)
  .fill(0)
  .map((e, i) => i);

export default function App() {
  const [dateType, setDateType] = useState('start');
  const [startDate, setStartDate] = useState(0);
  const [endDate, setEndDate] = useState(0);
  
  function updateDate(chosenDay) {
    // if user chosenDay is before current range
    if(startDate && chosenDay < startDate) {
      setStartDate(chosenDay);
      setDateType('end');
      return;
    }
    // if user chosenDay is after current range
    if(endDate && chosenDay > endDate) {
      setEndDate(chosenDay);
      setDateType('end');
      return;
    }
    if(dateType === 'start') {
      setStartDate(chosenDay);
      setDateType('end');
      return;
    }

    if(dateType === 'end') {
      setEndDate(chosenDay);
    }
  }

  return (
    <>
      <div className="date-chooser">
        <button 
          className="date-chooser-button"
          onClick={() => setDateType('start')}
        >
          Start Date <span>{startDate}</span>
        </button>
        <button 
          className="date-chooser-button"
          onClick={() => setDateType('end')}
        >
          End Date <span>{endDate}</span>
        </button>
      </div>

      <div className="calendar">
        {calendarDates.map((day, index) => {
          const dayNum = day + 1;
          let isSelected = (dayNum === startDate || dayNum === endDate) ? 'is-selected' : '';
          let isInRange = (endDate && dayNum > startDate && dayNum < endDate) ? 'is-in-range' : '';
          return <div 
            className={`calendar-day ${isSelected} ${isInRange}`}
            onClick={() => updateDate(dayNum)}
          >
            {dayNum}
          </div>;
        })}
      </div>
    </>
  );
}
