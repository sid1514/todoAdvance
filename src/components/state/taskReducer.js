import { DELETE_TASK, DESELECT_TASK, LOAD_TASKS, SAVE_TASK, SETCLICKTASK } from "./Action";

const initialState = {
  tasks: JSON.parse(localStorage.getItem("tasks")) || [],
  selectedTask: null,
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_TASKS:
      return {
        ...state,
        tasks: action.payload,
      };
    case SAVE_TASK:
      const updatedTasks = [...state.tasks, action.payload];
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      return {
        ...state,
        tasks: updatedTasks,
      };
    case DELETE_TASK:
      const filteredTasks = state.tasks.filter(
        (task) => task.id !== action.payload
      );
      localStorage.setItem("tasks", JSON.stringify(filteredTasks));
      return {
        ...state,
        tasks: filteredTasks,
      };
    case SETCLICKTASK:
      return {
        ...state,
        selectedTask: state.tasks.find((task) => task.id === action.payload),
      };
    case DESELECT_TASK:
      return {
        ...state,
        selectedTask: null,
      };
    default:
      return state;
  }
};

export default taskReducer;
