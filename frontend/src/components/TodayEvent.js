import React from 'react';

import TodayCard from './TodayCard';
import '../Styles/todayevents.css';
import { useSelector } from 'react-redux';

const TodayEvent = () => {
  const date = useSelector(state => state.date);
  const user = useSelector(state => state.user);
  const todaysEvents = date.todaysEvents;
  const Events = user.teacherEvents ? user.teacherEvents.Events : null;
  
  return (
    <div id="todayEvents">
      <div className="todayEventsheading">
        {user.searched && Events !== null ? (
          <h3>
            {user.teacherEvents.firstName} {user.teacherEvents.lastName}
          </h3>
        ) : (
          <h3>Todays Events</h3>
        )}
      </div>

      {user.searched && Events !== null
        ? Events.map(t => <TodayCard key={t.id} t={t} />)
        : todaysEvents.map(t => <TodayCard key={t.id} t={t} />)}
    </div>
  );
};

export default TodayEvent;
