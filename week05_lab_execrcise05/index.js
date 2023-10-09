const express = require('express');
const app = express();
const router = express.Router();
const fs = require('fs');

router.get('/home', (req,res) => {
  res.sendFile(__dirname + '/home.html');
});

router.get('/profile', (req,res) => {
  res.sendFile(__dirname + '/user.json');
});

//http://localhost:8088/login?username=bret&password=bret@123
router.get('/login', (req, res) => {

  const { username, password } = req.query;

  fs.readFile('user.json', 'utf8', (err, data) => {

  const userDetails = JSON.parse(data);

    if (userDetails.username === username && userDetails.password === password) {
      res.json({
        status: true,
        message: "User is valid"
      });
    } else if (userDetails.username !== username && userDetails.password !== password) {
      res.json({
        status: false,
        message: "Both username and password are invalid"
      });
    }else if (userDetails.username !== username) {
      res.json({
        status: false,
        message: "Username is invalid"
      });
    } else {
      res.json({
        status: false,
        message: "Password is invalid"
      });
    }
    
  });
});

router.get('/logout/:username', (req, res) => {

  const { username } = req.params;

  const response = `<b>${username} successfully logged out.</b>`;

  res.send(response);
});

app.use('/', router);

app.listen(process.env.port || 8088);

console.log('Web Server is listening at port '+ (process.env.port || 8088));