export const GET_ERRORS = "GET_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";
export const SET_CURRENT_USER = "SET_CURRENT_USER";
export const UPDATE_RECORDS = "UPDATE_RECORDS";
export const DATE_PICKER_CHANGE = "DATE_PICKER_CHANGE";
export const SLIDER_CHANGE = "SLIDER_CHANGE";
export const STOP_RECORDS = "STOP_RECORDS";

export const authTypes = {
  login: "LOGIN",
  loginSuccess: "LOGIN_SUCCESS",
  loginFail: "LOGIN_FAIL",

  signup: "SIGN_UP",
  signupSuccess: "SIGN_UP_SUCCESS",
  signupFail: "SIGN_UP_FAIL",

  logout: "LOGOUT",
};

export const sensorTypes = {
  fetchAllSensors: "SENSORS_FETCH_ALL",
  fetchAllSensorsSuccess: "SENSORS_FETCH_ALL_SUCCESS",
  fetchAllSensorsFail: "SENSORS_FETCH_ALL_FAIL",
};

// notification
export const notificationTypes = {
  showNotification: "NOTIFICATION_SHOW_NOTIFICATION",
  resetNotification: "NOTIFICATION_RESET_NOTIFICATION",
};
