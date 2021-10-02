import axios from "axios";

import UserModel from "../api/models/user.js";

export const signup = async (req, res, next) => {
  const { name, email, password } = req.body;
  console.log("mail", email, password);

  axios({
    method: "POST",
    // headers: {
    //   "Content-Type": "application/json",
    // },
    data: {
      email,
      password,
    },
    url: "https://opendata.hopefully.works/api/signup",
  })
    .then((result) => {
      console.log("result", result.data);
      const newUser = new UserModel({
        name,
        email,
        password,
      });
      newUser.save();
      res.status(201).json({ message: "test done", result: result.data });
    })
    .catch((err) => {
      console.log("err", err);
      return res.status(400).json({ message: "Email already existed" });
    });
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  axios({
    method: "POST",
    // headers: {
    //   "Content-Type": "application/json",
    // },
    data: {
      email,
      password,
    },
    url: "https://opendata.hopefully.works/api/login",
  })
    .then((result) => {
      console.log("result", result.data);
      res.status(201).json({ message: "login success", result: result.data });
    })
    .catch((err) => {
      console.log("err", err);
      return res.status(400).json({ message: err.message });
    });
};

export const fetchData = async (req, res) => {
  axios({
    method: "GET",
    data: req.data,
    url: "https://opendata.hopefully.works/api/events",
  })
    .then((result) => {
      console.log("result", result.data);
      res
        .status(201)
        .json({ message: "Sensors fetched successfully", result: result.data });
    })
    .catch((err) => {
      console.log("err", err);
      return res.status(400).json({ message: "Failed to fetch sensors" });
    });
};
