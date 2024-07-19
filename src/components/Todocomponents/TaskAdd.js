import React, { useEffect, useState } from "react";
import { Icon } from "semantic-ui-react";
import TaskCard from "./TaskCard";
import { useDispatch, useSelector } from "react-redux";
import {
  deselectTask,
  loadTasks,
  saveTask,
  setClickedTask,
  toggleBoolean,
} from "../state/Action";

const TaskAdd = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);
  const selectedTask = useSelector((state) => state.tasks.selectedTask);
  useEffect(() => {
    dispatch(loadTasks());
  }, [dispatch]);

  const handleSaveTask = () => {
    if (task.trim()) {
      const taskData = { id: Date.now(), name: task };
      dispatch(saveTask(taskData));
    }
  };
  const handleTaskClick = (id) => {
    if (selectedTask) dispatch(deselectTask());
    dispatch(setClickedTask(id));
  };
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSaveTask();
    }
  };

  return (
    <div>
      <p className="border-bottom ">To Do</p>
      <div className="d-flex flex-column">
        <input
          type="text"
          className="border p-2"
          placeholder="Add A Task"
          onChange={(e) => setTask(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <div className="row ">
          <div className="pe-4 py-2 col-md-10 ">
            <Icon name="bell outline" size="large" className="pe-2" />
            <Icon name="retweet" size="large" className="" />
            <Icon name="calendar outline" size="large" className="ps-3" />
          </div>
          <div className="col-md-2 mt-4">
            <button
              className="border-0 p-2 text-success rounded"
              onClick={handleSaveTask}
            >
              ADD TASK
            </button>
          </div>
        </div>
      </div>
      <div onClick={() => dispatch(toggleBoolean())}>
        {tasks?tasks.map((t) => (
          <TaskCard taskName={t.name} handleTaskClick={handleTaskClick(t.id)} />
        )):null}
      </div>
    </div>
  );
};

export default TaskAdd;
