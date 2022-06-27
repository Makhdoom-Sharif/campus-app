import { configureStore } from "@reduxjs/toolkit";
// import reducers  from "../reducer/index";

// const store = configureStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// export default store;

// subscribe(listener)

// Adds a change listener. It will be called any time an action is dispatched, and some part of the state tree may potentially have changed. You may then call getState() to read the current state tree inside the callback.

import { applyMiddleware} from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import reducers from "../actions/index";


const middleware = [thunk];
if (process.env.NODE_ENV === "development"){
    middleware.push(logger)
} 
export const store= configureStore(reducers,applyMiddleware (...middleware));