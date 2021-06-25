import React, { useEffect, useState } from 'react';
import '../../Styles/createEventModel.css';
import close from '../../assets/close.svg';

import { useDispatch, useSelector } from 'react-redux';
import { setClickeEvent, setEvents } from '../../actions/date.action';
import { searchAvailableTeachers } from '../../actions/user.action';

const CreateEvent = ({ onClose }) => {
  const date = useSelector(state => state.date);
  var initialdate;
  
  if (date.clicked.length > 1) {
    const curr = new Date(date.clicked);
    initialdate = curr.toISOString().substr(0, 10);
  } else {
    initialdate = null;
  }

  const [Note, setNote] = useState('');
  const [TeacherId, setTeacherId] = useState('');
  const [Batch, setBatch] = useState('');
  const [day, setDay] = useState(initialdate);
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const user = useSelector(state => state.user);
  const availableTeachers = user.availableTeachers;
  const dispatch = useDispatch('');

  useEffect(() => {
    dispatch(searchAvailableTeachers({ day, from, to }));
  }, [day, from, to]);

  const saveEvent = () => {
    dispatch(setEvents({ Note, TeacherId, Batch, day, from, to }));
    dispatch(setClickeEvent(null));
  };

  return (
    <>
      <div id="newEventModal">
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
            onChange={e => setDay(e.target.value)}
            
          />
          <p>From</p>
          <input
            value={from}
            onChange={e => setFrom(e.target.value)}
            type="time"
            step="900"
          />
          <p>To</p>
          <input
            type="time"
            step="900"
            value={to}
            onChange={e => setTo(e.target.value)}
          />
          <div >
            <select className="select_dropdown"
              value={TeacherId}
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
          <div >
            <select className="select_dropdown"
              value={Batch}
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
            onChange={e => setNote(e.target.value)}
            type="text"
            placeholder="Note...."
          />
        </div>
        <button onClick={saveEvent} id="saveButton">
          Save
        </button>
      </div>

      <div id="modalBackDrop"></div>
    </>
  );
};

export default CreateEvent;
