const mongoose = require("mongoose");

// Fetch url on the config file
const dotenv = require("dotenv");
dotenv.config({path:"../config.env"});
const MongoDB_URL = process.env.MongoDB_URL;

const connection = mongoose.connect(MongoDB_URL).then(()=>{console.log("Success")}).catch((e)=>{console.log(e)});

module.exports = connection;