const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));

// Fetch PORT Number on the config file
const dotenv = require("dotenv");
dotenv.config({path:"./config.env"});
const PORT = process.env.PORT;

// Create connection with the MongoDB database
require('./sources/mongoos_connection');

// Controll all the router paths on server side
app.use(require('./sources/router_path'));



// Controller of the API to call the functions
app.get("/index",(req,res) => {
    res.send(`Your Application is running on the server.`);
});



// Start the application on the server
app.listen(PORT,() => {
    console.log(`Server is Running on the Port Number :`,PORT);
});