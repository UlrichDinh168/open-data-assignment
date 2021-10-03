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
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload,
        accessToken: action.payload.token,
      };
    default:
      return state;
  }
};
