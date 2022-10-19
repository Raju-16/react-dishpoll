import { applyMiddleware, compose, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducer as AppReducer } from "./AppReducer/reducer";

const reduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export const store = legacy_createStore(
  AppReducer,
  compose(applyMiddleware(thunk), reduxDevTools)
);
