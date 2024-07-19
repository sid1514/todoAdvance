import { LOGIN, LOGOUT, SIGNUP, TOGGLEMENU } from "./Action";

const initialState = {
  isAuthenticated: false,
  user: null,
  value: false,
  users: JSON.parse(localStorage.getItem("users")) || [],
  loginError: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      const user = state.users.find(
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
      localStorage.removeItem("isAuthenticated");
      localStorage.removeItem("user");
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    case SIGNUP:
      const updatedUsers = [...state.users, action.payload];
      localStorage.setItem("users", JSON.stringify(updatedUsers));
      return {
        ...state,
        users: updatedUsers,
      };
    case TOGGLEMENU:
      return {
        ...state,
        value: !state.value,
      };
    default:
      return state;
  }
};

export default authReducer;
