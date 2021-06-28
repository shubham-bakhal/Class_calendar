import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getTodaysEvents,
  setDateDisplay,
  setDayArr,
} from '../actions/date.action';
export const useDate = () => {
  const dispatch = useDispatch();
  const date = useSelector(state => state.date);
  const nav = date.nav;
  const events = date.events;

  const eventForDate = datestr =>
    events.filter(e => {
      let day = new Date(e.day).getDate();
      let month = new Date(e.day).getMonth();
      let year = new Date(e.day).getFullYear();

      return datestr === `${year}-${month + 1}-${day}`;
    });

  useEffect(() => {
    const weekdays = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];

    const dt = new Date();

    if (nav !== 0) {
      dt.setMonth(new Date().getMonth() + nav);
    }

    const day = dt.getDate();
    const month = dt.getMonth();
    const year = dt.getFullYear();

    const firstDayOfMonth = new Date(year, month, 1);
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const dateString = firstDayOfMonth.toLocaleDateString('en-in', {
      weekday: 'long',
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
    });

    dispatch(
      setDateDisplay(
        `${dt.toLocaleDateString('en-in', { month: 'long' })} ${year}`
      )
    );

    const paddingDays = weekdays.indexOf(dateString.split(', ')[0]);

    const daysArr = [];
    for (let i = 1; i <= paddingDays + daysInMonth; i++) {
      const dayString = `${year}-${month + 1}-${i - paddingDays}`;
     

      if (i > paddingDays) {
        daysArr.push({
          value: i - paddingDays,
          event: eventForDate(dayString),
          isCurrentDay: i - paddingDays === day && nav === 0,
          date: dayString,
        });
      } else {
        daysArr.push({
          value: 'padding',
          event: null,
          isCurrentDay: false,
          date: '',
        });
      }
    }

    dispatch(setDayArr(daysArr));
    dispatch(getTodaysEvents());
  }, [events, date.nav]);
  return {};
};
