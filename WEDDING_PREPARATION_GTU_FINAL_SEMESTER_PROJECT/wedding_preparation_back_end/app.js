const express = require("express");
const app = express();
require("./database/connection");
const cors = require("cors");
const morgan = require("morgan");

app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));

// Routes
app.use("/auth", require("./authentication/auth_controller"));
app.use("/user", require("./controllers/user_controller"));

// const dotenv = require("dotenv");
// dotenv.config({ path: "./.env" });

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server is running on port ${process.env.PORT || "5000"}`);
});
