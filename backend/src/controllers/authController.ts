// src/controllers/authController.ts
import { Request, Response } from "express";
import User, { UserType } from "../models/User";
import generateToken from "../utils/generateToken";

export const signup = async (req: Request, res: Response) => {
  const { username, email, password } = req.body;

  // Check if user already exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ message: "User already exists" });
  }

  // Create a new user
  const user = new User({ username, email, password });
  await user.save();

  // Generate token
  const token = generateToken(user._id);

  // Set token in HTTP-only cookie
  res.cookie("token", token, {
    httpOnly: true,
    secure: false,
    sameSite: "none",
  });

  res.status(201).json({
    token,
    user: {
      id: user._id,
      username: user.username,
      email: user.email,
    },
  });
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    const token = generateToken(user._id);
    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "none",
    });
    res.json({
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
      },
    });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
};
