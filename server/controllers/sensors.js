import axios from "axios";
import { getToken } from "../helpers/tokenHelpers.js";
import SensorModel from "../api/models/sensor.js";

export const fetchSensors = async (req, res) => {
  const token = getToken(req);
  console.log("req", req);

  axios({
    method: "GET",
    url: "https://opendata.hopefully.works/api/events",
    headers: { Authorization: `Bearer ${token}` },
  })
    .then((result) => {
      const newSensor = new SensorModel({
        date: result.data.date,
        sensor1: result.data.sensor1,
        sensor2: result.data.sensor2,
        sensor3: result.data.sensor3,
        sensor4: result.data.sensor4,
      });
      newSensor.save();

      res
        .status(201)
        .json({ message: "Sensors fetched successfully", result: result.data });
    })
    .catch((err) => {
      console.log("err", err);
      return res.status(400).json({ message: "Failed to fetch sensors" });
    });
};
