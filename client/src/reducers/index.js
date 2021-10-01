import { combineReducers } from "redux";
import { auth } from "./auth";
// import errorReducer from './errorReducer';
// import recordReducer from './recordReducer';

export const rootReducer = combineReducers({
  auth: auth,
  //   errors: errorReducer,
  //   records: recordReducer
});
