const express = require('express');
const app = express();
const session = require('express-session');

app.use(session({
  secret: 'nodejs', cookie: {maxAge: 60000000},
  resave: true, saveUninitialized: false
}));

app.get('/count', (req, res) => {
  if(req.session.count == null) {
    req.session.count = 0;
  }

  req.session.count = req.session.count + 1;
  // res.send('count: ' + req.session.count);

  res.setHeader("Content-Type", "text/html");
  res.write(`<b><font color='#FF0000'>Count: ${req.session.count}</b>`)
  res.end();
});

app.get('/reset', (req, res) => {
  req.session.destroy();
  res.redirect('/count');
});

app.listen(3000, () => {
  console.log('server run at port 3000');
});