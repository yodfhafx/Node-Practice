const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({
  extended: false
}));

app.get('/', (req, res) => {
  res.send('welcome');
});

app.get('/profile', (req, res) => {
  res.send('profile');
});

app.get('/login', (req, res) => {
  res.send(`username:${req.query.username} password:${req.query.password}`);
});

app.post('/post', (req, res) => {
  res.send(`post username:${req.body.username} password:${req.body.password}`);
});

app.put('/post', (req, res) => {
  res.send(`put username:${req.body.username} password:${req.body.password}`);
});

app.delete('/post', (req, res) => {
  res.send(`delete username:${req.body.username} password:${req.body.password}`);
});

app.listen(3000, () => {
  console.log('server run at port 3000');
});

