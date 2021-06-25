import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DayDetailDay from '../Day/DayDetailDay';
import '../../Styles/daydetail.css';
import { setClickeEvent } from '../../actions/date.action';

const DayDetail = () => {
  const dispatch = useDispatch();
  const week = useSelector(state => state.week);
  var rows = [];

  for (var i = 0; i < 24; i++) {
    const events = week.day.event.filter(
      e => e.from.split(':')[0] >= i && e.to.split(':')[0] <= i + 1
    );
  
    rows.push(
      <DayDetailDay
        events={events}
        key={i}
        day={week.day}
        onClick={() => {
          dispatch(setClickeEvent(week.day.day.toISOString().slice(0, 10)));
        }}
      />
    );
  }


  var dayName = week.day.day.toString().split(' ')[0];


  return (
    <div id="daydetail">
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
      <div className="time_rightday">
        <p>{dayName}</p>
        <h2>{week.day.value}</h2>
        <div>
          {rows}
        </div>
      </div>
    </div>
  );
};

export default DayDetail;
