const express = require('express');
const app = express();

app.get('/', (req,res) => {
  res.send('Home Page');
});

app.get('/profile', (req, res) => {
  res.send('My name is Fha');
});

app.post('/profile', (req, res) => {
  res.json({result: 'add success'});
});

app.delete('/profile', (req, res) => {
  res.json({result: 'delete success'});
});

app.get('/login', (req, res) => {
  res.send('Login Page');
});

app.listen(3000, () => {
  console.log('Servar run at port 3000');
});