import React from 'react';
import { useState } from 'react';
import close from '../../assets/close.svg';
import { useDispatch, useSelector } from 'react-redux';
import '../../Styles/deleteEventModel.css';
import {
  deleteSelectedEvent,
  removeDeleteEvent,
  updateSelectedEvent,
} from '../../actions/date.action';
import { searchAvailableTeachers } from '../../actions/user.action';
import { useEffect } from 'react';

const DeleteEvent = () => {
  const date = useSelector(state => state.date);
  const deleteEvent = date.deleteEvent;

  // setting initial date
  const curr = new Date(deleteEvent.day);
  const initialdate = curr.toISOString().substr(0, 10);

  // initail state
  const [Note, setNote] = useState(deleteEvent.Note);
  const [TeacherId, setTeacherId] = useState(deleteEvent.TeacherId);
  const [Batch, setBatch] = useState(deleteEvent.Batch);
  const [day, setDay] = useState(initialdate);
  const [from, setFrom] = useState(deleteEvent.from);
  const [to, setTo] = useState(deleteEvent.to);
  const user = useSelector(state => state.user);
  const availableTeachers = user.availableTeachers;
  const dispatch = useDispatch();

  const onDelete = () => {
    const id = deleteEvent.id;
    dispatch(deleteSelectedEvent({ id }));
    dispatch(removeDeleteEvent(null));
  };

  const onUpdate = () => {
    const id = deleteEvent.id;
    dispatch(
      updateSelectedEvent({ id, Note, TeacherId, Batch, day, from, to })
    );
    dispatch(removeDeleteEvent(null));
  };

  useEffect(() => {
    dispatch(searchAvailableTeachers({ day, from, to }));
  }, [day, from, to]);

  const onClose = () => dispatch(removeDeleteEvent(null));

  return (
    <>
      <div id="deleteEventModal">
        <div className="event-header">
          <button>
            <img onClick={onClose} src={close} alt="" />
          </button>
        </div>
        <div className="event-input">
          <p>Day</p>
          <input
            type="date"
            value={day}
            required
            onChange={e => setDay(e.target.value)}
            // min={moment().format('YYYY-MM-DD')}
          />
          <p>From</p>
          <input
            value={from}
            required
            onChange={e => setFrom(e.target.value)}
            type="time"
            step="900"
          />
          <p>To</p>
          <input
            type="time"
            required
            step="900"
            value={to}
            onChange={e => setTo(e.target.value)}
          />
          <div>
            <select
              className="select_dropdown"
              value={TeacherId}
              required
              onChange={e => setTeacherId(e.target.value)}
              name="display"
            >
              {availableTeachers.map(t => (
                <option key={t.id} value={t.id}>
                  {t.firstName} {t.lastName}
                </option>
              ))}
            </select>
          </div>
          <div>
            <select
              className="select_dropdown"
              value={Batch}
              required
              onChange={e => setBatch(e.target.value)}
              name="display"
            >
              <option value="Comp 1">Comp 1</option>
              <option value="Comp 2">Comp 2</option>
              <option value="Comp 3">Comp 3</option>
              <option value="Mech 1">Mech 1</option>
              <option value="Mech 2">Mech 2</option>
              <option value="Mech 3">Mech 3</option>
            </select>
          </div>

          <textarea
            id="eventTitleInput"
            value={Note}
            required
            onChange={e => setNote(e.target.value)}
            type="text"
            placeholder="Note...."
          />
        </div>

        <button onClick={onDelete} id="deleteButton">
          Delete
        </button>
        <button onClick={onUpdate} id="updateButton">
          update
        </button>
      </div>

      <div id="modalBackDrop"></div>
    </>
  );
};

export default DeleteEvent;
