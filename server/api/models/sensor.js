import mongoose from "mongoose";

const sensorSchema = mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  sensor1: {
    type: Number,
    required: true,
  },
  sensor2: {
    type: Number,
    required: true,
  },
  sensor3: {
    type: Number,
    required: true,
  },
  sensor4: {
    type: Number,
    required: true,
  },
});

export default mongoose.model("User", sensorSchema);
