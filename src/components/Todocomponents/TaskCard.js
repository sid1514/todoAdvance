import React from "react";
import { Icon } from "semantic-ui-react";

const TaskCard = ({ taskName, handleTaskClick }) => {
  return (
    <div className="border-bottom d-flex row" onClick={handleTaskClick}>
      <div className="p-4 col-md-10 fw-semibold">
        <input type="checkbox" className="me-4 " />
        <label>{taskName}</label>
      </div>
      <div className="md:col-md-1 p-4 ms-4">
        <Icon name="star outline" size="large" />
      </div>
    </div>
  );
};

export default TaskCard;
