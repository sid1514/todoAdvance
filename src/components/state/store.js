// store.js

import {thunk} from "redux-thunk";
import authReducer from "./reducer"; // Ensure this path is correct
import { applyMiddleware, createStore } from "redux";


const store = createStore(authReducer, applyMiddleware(thunk));

export default store;
