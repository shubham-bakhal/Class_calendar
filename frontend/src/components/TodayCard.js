import React from 'react';
import '../Styles/todaycard.css';

const TodayCard = ({ t }) => {
  return (
    <div id="TodayCard">
      <div className="topic">
        <p>{t.Note}</p>
      </div>
      <div className="eventInfo">
        {t.Teacher ? (
          <p>
            By {t.Teacher.firstName} {t.Teacher.lastName}
          </p>
        ) : (
          ''
        )}

        <div>
          <span>{t.Batch}</span>
        </div>
      </div>
    </div>
  );
};

export default TodayCard;
