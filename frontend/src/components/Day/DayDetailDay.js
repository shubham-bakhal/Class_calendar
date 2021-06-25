import React from 'react';
import { useDispatch } from 'react-redux';
import { setDeleteEvent } from '../../actions/date.action';
import '../../Styles/daydetailday.css'


const DayDetailDay = ({ day, events , onClick}) => {
  const dispatch = useDispatch();

  return (
    <div id="dayDetailDay" className="week_box" onClick={onClick}>
      {events &&
        events.length > 0 &&
        events.map(event => (
          <div
            key={event.id}
            className="event"
            id="dayEvent"
            onClick={e => {
              e.stopPropagation();

              dispatch(setDeleteEvent(event));
            }}
          >
            {event.Note}
          </div>
        ))}
    </div>
  );
};

export default DayDetailDay;
