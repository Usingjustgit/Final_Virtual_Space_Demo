const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = mongoose.Schema({
  fullName: {
    type: String,
    required: [true, "Please enter your full name"],
  },
  email: {
    type: String,
    required: [true, "Please enter your email"],
    validator: [validator.isEmail, "Please enter a valid email"],
  },
  birth_date: {
    type: Date,
    required: [true, "Please enter your birth date"],
  },
  phone: {
    type: String,
    required: [true, "Please enter your phone number"],
    validator: [validator.isMobilePhone, "Please enter a valid phone number"],
  },
  password: {
    type: String,
    required: [true, "Please enter your password"],
  },
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },
});

const user = mongoose.model("user", userSchema);

module.exports = user;
