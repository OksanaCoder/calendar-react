import React from "react";
import ViewDay from "../ViewDay";
import ViewMonth from "../ViewMonth";
import { startOfMonth, endOfMonth, eachDayOfInterval } from "date-fns";

const Calendar = () => {
  const currentDate = new Date(); // Поточна дата

  const firstDayOfMonth = startOfMonth(currentDate); // Перший день поточного місяця
  const lastDayOfMonth = endOfMonth(currentDate); // Останній день поточного місяця

  const daysInMonth = eachDayOfInterval({
    start: firstDayOfMonth,
    end: lastDayOfMonth
  });
  return (
    <div>
      <ViewDay currentDate={currentDate} />
      <ViewMonth currentDate={currentDate} daysInMonth={daysInMonth} />
    </div>
  );
};

export default Calendar;
