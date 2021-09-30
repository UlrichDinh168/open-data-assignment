import express from "express";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import User from "../models/user";

const router = express.Router();

router.post("/signup", (req, res, next) => {
  const { name, email, password } = req.body;
  try {
    const existUser = User.find({ email });
    if (existUser)
      return res.status(400).json({
        message: "Email already exists",
      });
    const hashedPassword = await bcrypt.hash(password, 12);
    const result = await UserModal.create({
      email,
      password: hashedPassword,
      name: ` ${name}`,
    });
    const token = jwt.sign({ email: result.email, id: result._id }, secret, {
      expiresIn: "1h",
    });

    result
      .save()
      .then((result) => {
        console.log(result);
        res.status(201).json({
          message: "User created",
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({
          error: err,
        });
      });
    res.status(201).json({ result, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
    console.log(error);
  }
});

router.post("/login", (req, res, next) => {
  try {
    const { email, password } = req.body;
    const existUser = await UserModal.find({ email });
    if (!existUser)
      return res.status(404).json({ message: "User doesn't exist" });
    const isCorrectPassword = await bcrypt.compare(
      password,
      existUser.password
    );
    if (!isCorrectPassword)
      return res.status(400).json({ message: "Invalid credentials" });
    const token = jwt.sign(
      { email: existUser.email, id: existUser._id },
      secret,
      { expiresIn: "1h" }
    );
    res.status(200).json({ result: existUser, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
    console.log(error);
  }
});

export default router;
