import axios from "axios";

import UserModel from "../api/models/user.js";

export const signup = async (req, res, next) => {
  const { name, email, password } = req.body;
  axios({
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: {
      email,
      password,
    },
    url: "https://opendata.hopefully.works/api/signup",
  })
    .then((result) => {
      const newUser = new UserModel({
        name,
        email,
        password,
      });
      newUser.save();
      res.status(201).json({
        message: "Signup success",
        result: { ...result.data, name: newUser.name },
      });
    })
    .catch((err) => {
      return res.status(400).json({ message: "Email already existed" });
    });
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  axios({
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: {
      email,
      password,
    },
    url: "https://opendata.hopefully.works/api/login",
  })
    .then((result) => {
      res.status(201).json({ message: "login success", result: result.data });
    })
    .catch((err) => {
      return res.status(400).json({ message: "Login failed" });
    });
};
