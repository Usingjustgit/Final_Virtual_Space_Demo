const express = require("express");
const user_router = express.Router();
const UserModule = require("../database/schemas/user_module");
const { userAuth } = require("../authentication/middleware");
const bcrypt = require("bcryptjs");

// Update User
// End point - http://localhost:5000/user/update
// Method - PUT
// Required Parameters - fullName
user_router.put("/update", userAuth, async (req, res) => {
  const { fullName } = req.body;
  try {
    await UserModule.updateOne({ _id: req.user._id }, { $set: { fullName } });
    return res.status(200).json({ message: "User updated successfully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

// Change Password
// End point - http://localhost:5000/user/change-password
// Method - PUT
// Required Parameters - oldPassword, newPassword
user_router.put("/reset-password", userAuth, async (req, res) => {
  const { oldPassword, newPassword } = req.body;
  const userId = req.user._id;
  try {
    const user = await UserModule.findById(userId);
    const isMatch = await bcrypt.compare(oldPassword, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Old Password is incorrect" });
    }
    hashPassword = await bcrypt.hash(newPassword, 11);
    user.password = hashPassword;
    await user.save();
    return res.status(200).json({ message: "Password changed successfully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

// Forgot Password
// End point - http://localhost:5000/user/forgot-password
// Method - POST
// Required Parameters - email
user_router.post("/forgot-password", userAuth, async (req, res) => {
  const { email } = req.body;
  try {
    const user = await UserModule.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const randomNumber = Math.floor(100000 + Math.random() * 900000);
    const isSendEmail = await sendEmail(email, randomNumber);
    if (!isSendEmail) {
      return res.status(500).json({ message: "Email could not be sent" });
    }
    return res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

// Reset password
// End point - http://localhost:5000/user/reset-password
// Method - PUT
// Required Parameters - newPassword
user_router.put("/change-password", userAuth, async (req, res) => {
  const { newPassword } = req.body;
  const userId = req.user.userId;
  try {
    const user = await User.findById(userId);
    user.password = newPassword;
    await user.save();
    return res.status(200).json({ message: "Password changed successfully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

module.exports = user_router;
