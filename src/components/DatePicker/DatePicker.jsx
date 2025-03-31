import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styles from "../DatePicker/date-picker.module.scss";

function DatePicker() {
  const defaultDate = new Date(2025, 7, 15);
  const monthName = defaultDate.toLocaleString("ru-RU", { month: "long" }).toUpperCase();
  const year = defaultDate.getFullYear();

  return (
    <div className={styles.container}>
      
      <Calendar
        className={styles.customCalendar}
        prevLabel={null}
        prev2Label={null}
        nextLabel={null}
        next2Label={null}
        value={defaultDate}
        navigationLabel={() => <div className={styles.dateHeader}>{monthName}<span className={styles.year}>{year}</span></div>} 
      />
    </div>
  );
}

export default DatePicker;
