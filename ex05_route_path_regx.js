const express = require('express');
const app = express();

// root path
app.get('/', (req, res) => {
  res.end('default');
});

// ? = optional
// ex: /abcd or /acd
app.get('/ab?cd', (req, res) => {
  res.end('/ab?cd');
});

// + with same...
// ex: x1cd, x11cd, x11111cd (not call if xcd only)
app.get('/x1+cd', (req, res) => {
  res.end('/x1+cd, This route path will match ex: /x1cd, x11cd, x11111cd');
});

// * = any
app.get('/ab*cd', (req, res) => {
  res.end('/ab*cd, This route path will match abcd, abxcd, abRANDOMcd, ab123cd, and so on.');
});

app.listen(3000, () => {
  console.log('server run at port 3000');
});