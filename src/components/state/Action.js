export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const SIGNUP = "SIGNUP";
export const TOGGLEMENU = "TOGGLE_BOOLEAN";
export const SETCLICKTASK = "SETCLICKTASK";
export const LOAD_TASKS = "LOAD_TASKS";
export const SAVE_TASK = "SAVE_TASK";
export const DELETE_TASK = "DELETE_TASK";
export const DESELECT_TASK = "DESELECT_TASK";

export const login = (user) => {
  return (dispatch) => {
    dispatch({
      type: LOGIN,
      payload: user,
    });
  };
};

export const logout = () => {
 return (dispatch) => {
   dispatch({
     type: LOGOUT,
   });
 };
};

export const toggleBoolean = () => {
  return {
    type: TOGGLEMENU,
  };
};

export const setClickedTask = (id) => {
  return {
    type: SETCLICKTASK,
    payload: id,
  };
};
export const deselectTask = () => {
  return {
   type: DESELECT_TASK,
  };
};
export const signup = (user) => {
  return (dispatch) => {
    dispatch({
      type: SIGNUP,
      payload: user,
    });
  };
}

export const loadTasks = () => {
  return (dispatch) => {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    dispatch({ type: LOAD_TASKS, payload: tasks });
  };
};

export const saveTask = (task) => {
  return (dispatch) => {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    dispatch({ type: SAVE_TASK, payload: task });
  };
};

export const deleteTask = (id) => {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const updatedTasks = tasks.filter((task) => task.id !== id);
  localStorage.setItem("tasks", JSON.stringify(updatedTasks));

  return {
    type: DELETE_TASK,
    payload: id,
  };
};
