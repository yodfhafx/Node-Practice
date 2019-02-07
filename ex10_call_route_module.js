const express = require('express');
const router = require('./ex10_export_route_module.js');
const app = express();

app.use('/api', router);

app.get('/home', (req, res) => {
  res.end('home');
});

app.listen(3000, () => {
  console.log('server run at port 3000');
});