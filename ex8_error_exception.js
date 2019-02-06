const express = require('express');
const path = require('path');
const app = express();

app.get('/profile', (req, res) => {
  res.end('/profile');
});

app.use(function(req, res, error){
  // res.end('Page not found');
  res.sendFile(path.join(__dirname, '/public/page_not_found.html'))
});

app.listen(3000, () => {
  console.log('server run at port 3000');
});