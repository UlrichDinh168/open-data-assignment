import express from "express";
const router = express.Router();

import { fetchSensors } from "../../controllers/sensors.js";

router.get("/", fetchSensors);

export const sensorRoutes = router;
