import React, { useState } from 'react';
import './App.css';
import { 
  StyledCalender, 
  StyledCalenderDay, 
  StyledDateChooser, 
  StyledDateChooserButton 
} from './App.styled';

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
      <StyledDateChooser>
        <StyledDateChooserButton
          isChoosing={dateType === 'start'}
          onClick={() => setDateType('start')}
        >
          Start Date <span>{startDate}</span>
        </StyledDateChooserButton>
        <StyledDateChooserButton
          isChoosing={dateType === 'end'}
          onClick={() => setDateType('end')}
        >
          End Date <span>{endDate}</span>
        </StyledDateChooserButton>
      </StyledDateChooser>

      <StyledCalender>
        {calendarDates.map((day, index) => {
          const dayNum = day + 1;
          let isSelected = (dayNum === startDate || dayNum === endDate) ? 'is-selected' : '';
          let isInRange = (endDate && dayNum > startDate && dayNum < endDate) ? 'is-in-range' : '';
          return <StyledCalenderDay
            isInRange={isInRange}
            isSelected={isSelected}
            onClick={() => updateDate(dayNum)}
          >
            {dayNum}
          </StyledCalenderDay>;
        })}
      </StyledCalender>
    </>
  );
}