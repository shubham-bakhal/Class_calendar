import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import WeekDay from '../Day/WeekDay';
import '../../Styles/week.css';
import { setClickeEvent } from '../../actions/date.action';

const Week = () => {
  const week = useSelector(state => state.week);
  const dispatch = useDispatch();
  return (
    <div id="week">
      <div className="time">
        <p></p>
        <p>1 am</p>
        <p>2 am</p>
        <p>3 am</p>
        <p>4 am</p>
        <p>5 am</p>
        <p>6 am</p>
        <p>7 am</p>
        <p>8 am</p>
        <p>9 am</p>
        <p>10 am</p>
        <p>11 am</p>
        <p>12 am</p>
        <p>1 pm</p>
        <p>2 pm</p>
        <p>3 pm</p>
        <p>4 pm</p>
        <p>5 pm</p>
        <p>6 pm</p>
        <p>7 pm</p>
        <p>8 pm</p>
        <p>9 pm</p>
        <p>10 pm</p>
        <p>11 pm</p>
        <p></p>
      </div>
      <div className="time_right">
        <div className="weekDays">
          <p>SUN</p>
          <p>MON</p>
          <p>TUE</p>
          <p>WED</p>
          <p>THR</p>
          <p>FRI</p>
          <p>SAT</p>
        </div>
        <div className="week_grid">
          {week.week.map((d, index) => (
            <WeekDay
              key={index}
              day={d}
              onClick={() => {
             
                  dispatch(setClickeEvent(d.day));
                
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Week;
