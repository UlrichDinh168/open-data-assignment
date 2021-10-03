import { notificationTypes as types } from "./types";
import { NOTIFICATION_TYPE, NOTIFICATION_DURATION } from "../constants";

export const showNotification = (message) => {
  const defaultMessage = {
    type: NOTIFICATION_TYPE.success,
    message: "Message",
    duration: NOTIFICATION_DURATION,
  };
  return {
    type: types.showNotification,
    notification: { ...defaultMessage, ...message },
  };
};
export const resetNotification = (message) => {
  return {
    type: types.resetNotification,
  };
};
