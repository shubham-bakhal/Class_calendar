import React from 'react';
import { useDispatch } from 'react-redux';
import { setDeleteEvent } from '../../actions/date.action';
import '../../Styles/week_box.css';
const WeekBox = ({ day, events, onClick }) => {
    const dispatch = useDispatch()
    
  return (
    <div className='week_box'  onClick={onClick}>
      {events && 
        events.length > 0 &&
        events.map(event => (
          <div
            key={event.id}
            className="event"
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

export default WeekBox;
