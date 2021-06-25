import React from 'react';
import WeekBox from './WeekBox';
import '../../Styles/weekday.css';

const WeekDay = ({ day, onClick }) => {
  var rows = [];

  for (var i = 0; i < 24; i++) {

    const events = day.event.filter(e => e.from.split(':')[0] >= i && e.to.split(':')[0] <= i + 1)

    rows.push(<WeekBox events={events} key={i} day={day} onClick={onClick} />);
  }

  return (
    <div id="weekDay">
      <p className={day.isCurrentDay ? "currentDay" : ''}>{day.value}</p>
      {rows}
    </div>
  );
};

export default WeekDay;
