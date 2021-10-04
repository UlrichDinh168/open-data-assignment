import { combineReducers } from "redux";
import { userReducer } from "./user";
import { sensorReducer } from "./sensor";
import { notificationReducer } from "./notification";
// import errorReducer from './errorReducer';
// import recordReducer from './recordReducer';

export const rootReducer = combineReducers({
  user: userReducer,
  sensor: sensorReducer,
  notification: notificationReducer,
  //   errors: errorReducer,
  //   records: recordReducer
});
