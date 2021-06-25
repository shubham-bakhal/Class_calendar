import React from 'react';
import Header from '../components/Header';
import Month from '../components/Calender/Month';
import Week from "../components/Calender/Week"
import DayDetail from "../components/Calender/DayDetail"
import TodayEvent from '../components/TodayEvent';
import '../Styles/dashboard.css';
import { useSelector } from 'react-redux';

const Dashboard = () => {
  const date = useSelector(state => state.date)
  return (
    <div className="division">
      <TodayEvent />

      <div>
        <Header />
        <div>
        {date.type ==="Month" ?  <Month /> : date.type === "Week" ? <Week /> : <DayDetail/> }
        
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
