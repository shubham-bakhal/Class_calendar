import React, { useState } from 'react';
import MonthDay from '../Day/MonthDay';
import '../../Styles/month.css';
import { useDispatch, useSelector } from 'react-redux';
import { setClickeEvent } from '../../actions/date.action';


const Month = () => {
  const date = useSelector(state => state.date);
  const dispatch = useDispatch();
  return (
    <div id="month">
      <div className="weekdays">
        <p>SUN</p>
        <p>MON</p>
        <p>TUE</p>
        <p>WED</p>
        <p>THR</p>
        <p>FRI</p>
        <p>SAT</p>
      </div>
      <div className="month_grid">
        {date.days.map((d, index) => (
          <MonthDay
            key={index}
            day={d}
            onClick={() => {
              if (d.value !== 'padding') {
                dispatch(setClickeEvent(d.date));
              }
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Month;
