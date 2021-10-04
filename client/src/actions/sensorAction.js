import { sensorTypes as types } from "./types";

export const fetchAllSensors = (data) => {
  return {
    type: types.fetchAllSensors,
    payload: {
      request: {
        method: "GET",
        url: "/sensor",
        headers: {
          Authorization: `Bearer ${data}`,
        },
      },
    },
  };
};
