import { isEmpty } from "../helpers/validator";

import { authTypes as types } from "../actions/types";

const initialState = {
  isAuthenticated: false,
  user: {},
  accessToken: null,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.loginSuccess:
    case types.signupSuccess:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.data.result,
        accessToken: action.payload.token,
      };
    default:
      return state;
  }
};
