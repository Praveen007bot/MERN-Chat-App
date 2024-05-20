import { User } from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  try {
    const { name, username, password, confirmPassword, gender } = req.body;
    if (!(name && username && password && confirmPassword && gender)) {
      return res.status(400).json({ message: "All fields are required", success: false });
    }
    if (password !== confirmPassword) {
      return res.status(401).json({ message: "Both Passwords should be same", success: false });
    }
    const user = await User.findOne({ username });
    if (user) {
      return res.status(402).json({ message: "Username already exists", success: false });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const boyAvatar = `https://avatar.iran.liara.run/public/boy/?username=${user.name}`;
    const girlAvatar = `https://avatar.iran.liara.run/public/girl/?username=${user.name}`;

    const newUser = await User.create({
      name,
      username,
      password: hashedPassword,
      profilePhoto: gender === "male" ? boyAvatar : girlAvatar,
      gender,
    });
    return res
      .status(201)
      .json({ message: "Account created sucessfully", success: true });
  } catch (error) {
    console.log(error);
  }
};

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!(username && password)) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const user = await User.findOne({ username })
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const isCorrectPassword = await bcrypt.compare(password, user.password);
    if (!isCorrectPassword) {
      return res.status(402).json({ message: "Invalid Password" });
    }
    const tokenData = {
      userId: user._id,
    };
    const token = await jwt.sign(tokenData, process.env.JWT_SECRET_KEY, {
      expiresIn: "1d",
    });
    user.password = undefined;
    return res.status(200).cookie('token', token, {maxAge:1*24*60*60*1000, httpOnly: true, samesite: 'strict'}).json({
        message: 'Login sucessfully',
        user: user,
        success: true
    })
  } catch (error) {
    console.log(error);
  }
};

export const logout = (req, res) => {
  try {
    return res.status(200).cookie('token', '', {maxAge: 0}).json({message: 'Logged out sucessfully'})
  } catch (error) {
    console.log(error);
  }
}

export const getOtherUsers = async (req, res) => {
  try {
    const userId = req.id;
    const otherUsers = await User.find({_id:{$ne:userId}}).select('-password');
    return res.status(200).json({message: 'users found', users: otherUsers})
  } catch (error) {
    console.log(error);
  }
}

