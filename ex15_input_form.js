const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/login.html'));
});

app.post('/authen', (req, res) => {
  res.json({username: req.body.username, password: req.body.password, confirm: req.body.confirm_password});
});

app.listen(3000, () => {
  console.log('server run at port 3000');
});