import { sensorTypes as types } from "../actions/types";

const initialState = {
  sensors: [],
};

export const sensorReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.fetchAllSensorsSuccess:
      return {
        ...state,
        sensors: action.payload,
      };
    default:
      return state;
  }
};
