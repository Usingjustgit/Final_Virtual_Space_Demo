const express = require("express");
const auth = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../database/schemas/user_module");
const { userAuth } = require("./middleware");

// Import User Model
// End Point - http://localhost:5000/auth/registration
// Method - POST
// Required Parameters - fullName, email, password
auth.post("/registration", async (req, res) => {
  const { fullName, email, password, birth_date, phone } = req.body;
  try {
    const isUserExist = await User.findOne({ email });
    if (isUserExist) {
      return res.status(400).json({ message: "User already exist" });
    }
    const hashPassword = await bcrypt.hash(password, 11);
    const user = new User({
      fullName,
      email,
      password: hashPassword,
      birth_date,
      phone,
    }).save();
    return res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

// Login
// End Point - http://localhost:5000/auth/login
// Method - POST
// Required Parameters - email, password
auth.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    console.log(user);
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    const token = await jwt.sign({ userId: user._id }, "secretkey");
    res.cookie("token", token, {
      httpOnly: true,
      expires: new Date(Date.now() + 9000000),
    });
    return res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

auth.post("/logout", userAuth, async (req, res) => {
  try {
    res.clearCookie("token");
    console.log("Logout successful");
    return res.status(200).json({ message: "Logout successful" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

module.exports = auth;
