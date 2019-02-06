const express = require('express');
const app = express();

app.get('/example/a', (req, res) => {
  res.end('/example/a');
})

app.get('/example/b', (req, res, next) => {
  res.write('1:, ');
  next();
}, (req, res, next) => {
  if(req.query.password == '1234') {
    next();
  } else {
    res.end('2:, ');
  }
  next();
}, (req, res) => {
  res.end('3:, ');
});

var f1 = function (req, res, next) {
  console.log('f1');
  req.pass = 'f1';
  next();
};

var f2 = function (req, res, next) {
  console.log('f2');
  req.pass = req.pass + ', f2';
  next();
};

var f3 = function (req, res, next) {
  console.log('f3');
  req.pass = req.pass + ', f3';
  next();
};

app.get('/example/c', f1, f2, f3, (req, res) => {
  res.json({result: 'example/array', pass: req.pass});
})

app.listen(3000, () => {
  console.log('server run at port 3000');
});