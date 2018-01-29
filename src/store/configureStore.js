import { createStore, combineReducers } from "redux";

export default () => {
  //Store Creation
  const store = createStore(
    combineReducers({
      timeLeft: ""
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};