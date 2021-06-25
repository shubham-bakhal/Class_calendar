import React, { useEffect, useState } from 'react';
import today from '../assets/today.svg';
import left from '../assets/left.svg';
import right from '../assets/right.svg';
import add from '../assets/add.svg';
import '../Styles/header.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  setCalenderTypeStore,
  setClickeEvent,
  setNav,
} from '../actions/date.action';
import { setWeekCounter, setDayCounter } from '../actions/week.action';
import { setSearchedFalse } from '../actions/user.action';

const Header = () => {
  const date = useSelector(state => state.date);
  const week = useSelector(state => state.week);
  const [calenderType, setCalenderType] = useState('Month');
  const dispatch = useDispatch();

  var displayDate = date.dateDisplay;

  if (calenderType === 'Month') {
    displayDate = date.dateDisplay;
  } else if (calenderType === 'Week') {
    if (
      new Date(week.week[0].day).getMonth() ===
      new Date(week.week[6].day).getMonth()
    ) {
      displayDate = new Date(week.week[0].day).toLocaleDateString('en-in', {
        month: 'long',
        year: 'numeric',
      });
    } else {
      displayDate =
        new Date(week.week[0].day).toLocaleDateString('en-in', {
          month: 'long',
        }) +
        ' - ' +
        new Date(week.week[6].day).toLocaleDateString('en-in', {
          month: 'long',
          year: 'numeric',
        });
    }
  } else {
    displayDate =
      week.day.day.toLocaleDateString('en-in', { month: 'long' }) +
      ' ' +
      week.day.day.getFullYear();
  }

  const createNewEvent = () => {
    const dt = Date.now();
    dispatch(setClickeEvent(dt));
  };

  const leftActivity = () => {
    if (date.type === 'Month') {
      dispatch(setNav(date.nav - 1));
    } else if (date.type === 'Week') {
      dispatch(setWeekCounter(week.weekCounter - 1));
    } else {
      dispatch(setDayCounter(week.dayCounter - 1));
    }
  };

  const rightActivity = () => {
    if (date.type === 'Month') {
      dispatch(setNav(date.nav + 1));
    } else if (date.type === 'Week') {
      dispatch(setWeekCounter(week.weekCounter + 1));
    } else {
      dispatch(setDayCounter(week.dayCounter + 1));
    }
  };

  useEffect(() => {
    dispatch(setCalenderTypeStore(calenderType));
  }, [calenderType]);

  return (
    <div id="header">
      <div className="left_header">
        <button id="left" onClick={leftActivity}>
          <img src={left} alt="" />
        </button>

        <p className="date_Month">{displayDate}</p>

        <button onClick={rightActivity}>
          <img src={right} alt="" />
        </button>

        <div
          onClick={() => {
            dispatch(setNav(0));
            dispatch(setWeekCounter(0));
            dispatch(setDayCounter(0));
            dispatch(setSearchedFalse(false));
          }}
        >
          <img src={today} alt="" />
          <p>Today</p>
        </div>
      </div>

      <div className="right_header">
        <button onClick={createNewEvent} className="createbtn">
          <img src={add} alt="" />
          <p>Create</p>
        </button>
        <div className="select_dropdown">
          <select
            value={calenderType}
            onChange={e => setCalenderType(e.target.value)}
            name="display"
          >
            <option value="Month">Month</option>
            <option value="Week">Week</option>
            <option value="Day">Day</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Header;
