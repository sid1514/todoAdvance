import {
  LOGIN,
  LOGOUT,
  SIGNUP,
  TOGGLEMENU,
  LOAD_TASKS,
  SAVE_TASK,
  DELETE_TASK,
  SETCLICKTASK,
  DESELECT_TASK,
} from "./Action";

const initialState = {
  isAuthenticated: false,
  user: null,
  value: false,
  taskValue: [],
  users: [],
  tasks: JSON.parse(localStorage.getItem("tasks")) || [],
  loginError: null,
  selectedTask: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

      const user = storedUsers.users.find(
        (u) =>
          u.username === action.payload.username &&
          u.password === action.payload.password
      );
      if (user) {
        localStorage.setItem("isAuthenticated", "true");
        localStorage.setItem("user", JSON.stringify(user));
        return {
          ...state,
          isAuthenticated: true,
          user,
          loginError: null,
        };
      }
      return {
        ...state,
        loginError: "Invalid username or password",
      };
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    case SIGNUP:
      const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
      localStorage.setItem(
        "users",
        JSON.stringify([...existingUsers, action.payload])
      );
      return {
        ...state,
        users: [...existingUsers, action.payload],
      };
    case TOGGLEMENU:
      return {
        ...state,
        value: !state.value,
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
    case LOAD_TASKS:
      return {
        ...state,
        tasks: action.payload,
      };
    case SAVE_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    default:
      return state;
  }
};

export default authReducer;
