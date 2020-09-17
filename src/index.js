import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./containers/App";
import "tachyons";

//redux
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { searchRobots, requestRobots } from "./reducers";
import thunkMiddleware from "redux-thunk";

const rootReducers = combineReducers({ searchRobots, requestRobots });
const store = createStore(rootReducers, applyMiddleware(thunkMiddleware));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
