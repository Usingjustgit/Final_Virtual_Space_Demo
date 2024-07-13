const jwt = require("jsonwebtoken");
const User = require("../database/schemas/user_module");

const userAuth = async (req, res, next) => {
  try {
    const token =
      req.headers["authorization"].split(" ")[1] ||
      req.cookies["token"].split(" ")[1];
    console.log(token);
    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    const decoded = await jwt.verify(token, "secretkey");
    const user = await User.findById(decoded.userId);
    console.log(user);
    req.user = user;
    next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({ message: "Unauthorized" });
  }
};

module.exports = { userAuth };
