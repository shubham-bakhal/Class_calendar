import Navbar from './components/Navbar';
import Routes from './Routes/Routes';
import CreateEvent from './components/EventModel/CreateEvent';
import DeleteEvent from './components/EventModel/DeleteEvent';
import { useDispatch, useSelector } from 'react-redux';
import { getAllEvents, setClickeEvent } from './actions/date.action';
import { useDate } from './hooks/useDate';
import { checkSession } from './actions/auth.action';
import { useEffect } from 'react';
import { useWeek } from './hooks/useWeek';
import { useDay } from './hooks/useDay';

function App() {
  const date = useSelector(state => state.date);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkSession());
    dispatch(getAllEvents());
    //eslint-disable-next-line
  }, []);

  // for month
  useDate();
  useWeek();
  useDay();

  return (
    <div className="App">
      <Navbar />

      <Routes />

      {date.clicked && (
        <CreateEvent onClose={() => dispatch(setClickeEvent(null))} />
      )}

      {date.deleteEvent && <DeleteEvent />}
    </div>
  );
}

export default App;
