import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styles from '../DatePicker/date-picker.module.scss';



function DatePicker() {
  const [onChange] = useState(new Date());
   const defaultDate = new Date(2025, 7, 15);

  return (
    <div className={styles.container}>
      <Calendar 
      className={styles.customCalendar}
      onChange={onChange} 
      prevLabel={null}  
      prev2Label={null} 
      nextLabel={null}  
      next2Label={null}
      value={defaultDate}
       />
    </div>
  );
}

export default DatePicker