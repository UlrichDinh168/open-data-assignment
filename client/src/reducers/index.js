import { combineReducers } from "redux";
import { userReducer } from "./user";
import { sensorReducer } from "./sensor";
import { notificationReducer } from "./notification";

export const rootReducer = combineReducers({
  user: userReducer,
  sensor: sensorReducer,
  notification: notificationReducer,
});
