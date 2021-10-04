/**
 * Notification reducer
 *
 * @author Name <name@vertics.co>
 *
 * @copyright Vertics Co 2021
 */
import { notificationTypes as types } from "../actions/types";
import { NOTIFICATION_TYPE, NOTIFICATION_DURATION } from "../constants";
// import { errorUtils } from "helpers";

const initialState = {
  notification: null,
};

export const notificationReducer = (state = initialState, action) => {
  if (action.type.endsWith("_FAIL")) {
    return {
      ...state,
      notification: {
        type: NOTIFICATION_TYPE.error,
        message: action.error,
        duration: NOTIFICATION_DURATION,
      },
    };
  }
  switch (action.type) {
    case types.showNotification:
      return { ...state, notification: action.notification };
    case types.resetNotification:
      return initialState;
    default:
      return state;
  }
};