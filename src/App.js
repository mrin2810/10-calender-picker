import React, { useState } from 'react';
import styled from 'styled-components';
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
      <StyledDateChooser>
        <StyledDateChooserButton
          onClick={() => setDateType('start')}
        >
          Start Date <span>{startDate}</span>
        </StyledDateChooserButton>
        <StyledDateChooserButton
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
            onClick={() => updateDate(dayNum)}
          >
            {dayNum}
          </StyledCalenderDay>;
        })}
      </StyledCalender>
    </>
  );
}

const StyledDateChooser = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const StyledDateChooserButton = styled.button`
  color: #0b204c;
  text-transform: uppercase;
  flex: 1;
  padding: 15px;
  background: none;
  cursor: pointer;
  border: none;
  border-bottom: 2px solid rgba(11, 32, 76, 0.2);
  outline: none;
  span {
    display: block;
    min-height: 60px;
    font-size: 50px;
  }
`;

const StyledCalender = styled.div`
  max-width: 400px;
  border-radius: 10px;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
  background: #0b204c;
  color: #fff;
  padding: 20px;
`;

const StyledCalenderDay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  transition: 0.3s ease background;
  border: none;
  outline: none;
  cursor: pointer;
  color: #8096c1;
  background: none;
`;
