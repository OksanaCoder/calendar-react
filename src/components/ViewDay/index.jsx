import React from "react";
import PropTypes from "prop-types";
import { format } from "date-fns";

const ViewDay = ({ currentDate }) => {
  return (
    <section>
      <h3>{format(currentDate, "eeee")}</h3>
      <h2>{format(currentDate, "d")}</h2>
    </section>
  );
};

ViewDay.propTypes = {
  currentDate: PropTypes.object
};
export default ViewDay;
