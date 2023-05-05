import React from 'react'
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import styles from '@/styles/Home.module.css'

//Calendar
const Calendar = () => {
    return (
      <div className={styles.Ccontentbox}>
        <FullCalendar
          plugins={[ dayGridPlugin ]}
          initialView="dayGridMonth"
          events={[
            { title: 'Event 1', date: '2023-05-01' },
            { title: 'Event 2', date: '2023-05-02' }
          ]}
        />
      </div>
    );
  };
  export default Calendar