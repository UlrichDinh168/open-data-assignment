import axios from "axios";
import { getToken } from "../helpers/tokenHelpers.js";

export const fetchSensors = async (req, res) => {
  const token = getToken(req);

  axios({
    method: "GET",
    url: "https://opendata.hopefully.works/api/events",
    headers: { Authorization: `Bearer ${token}` },
  })
    .then((result) => {
      res
        .status(201)
        .json({ message: "Sensors fetched successfully", result: result.data });
    })
    .catch((err) => {
      console.log("err", err);
      return res.status(400).json({ message: "Failed to fetch sensors" });
    });
};
