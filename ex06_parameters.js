const express = require('express');
const app = express();

app.get('/post/:username/:password', (req, res) => {
  res.json({username: req.params.username, password: req.params.password});
});

app.get('/post/username/:username/password/:password', (req, res) => {
  res.json({username: req.params.username, password: req.params.password});
});

app.get('/travel/:from-:to', (req, res) => {
  res.json({from: req.params.from, to: req.params.to});
})

app.listen(3000, () => {
  console.log('server run at port 3000');
});