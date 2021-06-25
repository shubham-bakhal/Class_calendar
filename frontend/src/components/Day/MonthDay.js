import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDeleteEvent, updateSelectedEvent } from '../../actions/date.action';
import '../../Styles/day.css';

const MonthDay = ({ day, onClick }) => {
  const date = useSelector(state => state.date);
  const dispatch = useDispatch();
  const className = `day ${day.value === 'padding' ? 'padding' : ''} ${
    day.isCurrentDay ? 'currentDay' : ''
  }`;

  const drop = e => {
    e.preventDefault();

    const card_id = e.dataTransfer.getData('card_id');

    const dateToUpdate = date.events.filter(e => e.id == card_id);

    const { id, TeacherId, Batch, Note, from, to } = dateToUpdate[0];
    dispatch(
      updateSelectedEvent({
        id,
        TeacherId,
        Batch,
        Note,
        from,
        to,
        day: day.date,
      })
    );

    const card = document.getElementById(card_id);
    card.style.dispaly = 'block';

    e.target.appendChild(card);
    e.target.removeChild(card);
  };
  const dropOver = e => {
    e.preventDefault();
  };

  const dragStart = e => {
    const target = e.target;
    e.dataTransfer.setData('card_id', target.id);
    e.dataTransfer.setData('event', target.event);
  };

  const dragOver = e => {
    e.stopPropagation();
  };

  useEffect(() => {}, [date.events]);

  return (
    <div
      onClick={onClick}
      onDrop={drop}
      onDragOver={dropOver}
      className={className}
    >
      {day.value === 'padding' ? '' : day.value}

      {day.event &&
        day.event.length > 0 &&
        day.event.map(event => (
          <div>
            <div
              id={event.id}
              draggable="true"
              onDragStart={dragStart}
              onDragOver={dragOver}
              key={event.id}
              event={event.day}
              className="event"
              onClick={e => {
                e.stopPropagation();

                dispatch(setDeleteEvent(event));
              }}
            >
              {event.Note}
            </div>
          </div>
        ))}
    </div>
  );
};

export default MonthDay;
