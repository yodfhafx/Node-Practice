const express = require('express');
const app = express();

app.all('/secured/*', (req, res, next) => {
  console.log('Accessing the secret section');
  if(req.query.username == 'admin') {
    next();
  } else {
    res.send('You need to login first\n');
  }
});

app.get('/', (req, res) => {
  res.send('Home Page');
});

app.get('/secured/profile', (req, res) => {
  res.send('Profile Page');
});

app.get('/secured/inbox', (req, res) => {
  res.send('Inbox Page');
});

app.listen(3000, () => {
  console.log('server run at port 3000');
});