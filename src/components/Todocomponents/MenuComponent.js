import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Icon } from "semantic-ui-react";
import { deleteTask, logout, toggleBoolean } from "../state/Action";

const MenuComponent = ({toggleValue}) => {
  const selectedTask = useSelector((state) => state.tasks.selectedTask);
  const dispatch = useDispatch();
  const handleDeleteClick = (id) => {
    dispatch(deleteTask(id));
  };
  console.log(selectedTask);
  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <>
      <div
        className={`col-md-3 ps-2 ${
          !toggleValue ? "w-auto" : null
        } bg-color h-auto`}
      >
        <div className="border-top d-flex row mt-4">
          <div className="p-4 col-md-8 ">
            <input type="checkbox" className="me-4 " />
            <label>
              {selectedTask ? selectedTask.name : "no task selected"}
            </label>
          </div>
          <div className="col-md-3 p-4 ms-4">
            <Icon name="star outline" size="large" />
          </div>
        </div>
        <div className="border-top d-flex col p-2 pt-4 pb-4 position-relative ">
          <Icon name="add" size="large" />
          <label className="ps-3">Add Step</label>
        </div>
        <div className="border-top d-flex col p-2 pt-4">
          <Icon name="bell outline" size="large" />
          <label className="ps-3">Set Reminder</label>
        </div>
        <div className="border-top d-flex col p-2 pt-4">
          <Icon name="calendar alternate outline" size="large" />
          <label className="ps-3">Add Due Date</label>
        </div>
        <div className="border-top d-flex col p-2 pt-4">
          <Icon name="retweet" size="large" />
          <label className="ps-3">Repeat</label>
        </div>
        <div className="border-top d-flex col ps-4 ms-2 pt-4">
          <label className="ps-4"> Add Notes</label>
        </div>
        <div className="position_below d-flex align-center border-top">
          <div
            className=" pt-4 col-md-4"
            onClick={() => dispatch(toggleBoolean())}
          >
            <Icon name="cancel" size="large" />
          </div>
          <div className=" pt-4 col-md-6 ">Created Today</div>
          <div
            className="pt-4 col-md-3 ps-4"
            onClick={() => handleDeleteClick(selectedTask.id)}
          >
            <Icon name="trash" size="large" />
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuComponent;
