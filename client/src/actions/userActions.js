import { authTypes as types } from "./types";

export const signup = (data) => {
  return {
    type: types.signup,
    payload: {
      request: {
        method: "POST",
        url: "/user/signup",
        data,
      },
    },
  };
};

export const login = (data) => {
  return {
    type: types.login,
    payload: {
      request: {
        method: "POST",
        url: "/user/login",
        data,
      },
    },
  };
};

export const logout = () => {
  localStorage.removeItem("refreshToken");
  return {
    type: types.logout,
  };
};
