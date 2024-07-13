// const express = require("express");
// const app = express();
// const expressJwt = require('express-jwt');

// // app.use(require("./middleware/authJwt"));
// app.use(expressJwt({secret: "xyz"}));
// app.use(require("./send_mail"));


// app.listen(3030,() => {
//     console.log(`Your server is running on the port 3030.`);
// })


const express = require('express');
const app = express();

// Middleware to authenticate JWT token
app.use(require('./middleware/authJwt'));
  

// Protected route
app.get('/protected', (req, res) => {
  res.send('This is a protected route');
});

app.post('/login', async (req, res) => {
    res.send("This is a sign up page");
})

// Error handling for unauthorized access
app.use((err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    res.status(401).json({ error: 'Invalid token' });
  }
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
