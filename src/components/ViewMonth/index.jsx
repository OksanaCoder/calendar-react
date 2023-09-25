import React from "react";
import PropTypes from "prop-types";
import { format, getWeeksInMonth, startOfMonth } from "date-fns";

const namesDays = ["s", "m", "t", "w", "t", "f", "s"];
const ViewMonth = ({ currentDate, daysInMonth }) => {
  const renderNames = (name, index) => {
    return <th key={index}>{name}</th>;
  };
  const weeksInMonth = getWeeksInMonth(currentDate);

  return (
    <section>
      <h2>{format(currentDate, "MMMM y")}</h2>
      <table>
        <thead>
          <tr>{namesDays.map(renderNames)}</tr>
        </thead>
        <tbody>
          {Array.from({ length: weeksInMonth }, (_, weekIndex) => (
            <tr key={weekIndex}>
              {/* {namesDays.map((name, dayIndex) => (
                <>
                  <td key={dayIndex}>
                    {dayIndex < 7
                      ? format(daysInMonth[weekIndex * 7 + dayIndex], "d")
                      : ""}
                  </td>
                </>
              ))} */}
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

ViewMonth.propTypes = {
  date: PropTypes.object
};
export default ViewMonth;
