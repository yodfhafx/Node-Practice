const express = require('express');
const app = express()

// load session
const session = require('express-session');
app.use(session({
  secret: 'nodejs', cookie: {maxAge: 60000000},
  resave: true, saveUninitialized: false
}));

app.get('/login', (req, res) => {
  const _username = req.query.username;
  const _password = req.query.password;

  if(req.session.isLoggedIn != null && req.session.isLoggedIn == true){
    res.redirect('/profile');
  }

  if(_username == "admin" && _password == 'password') {
    req.session.isLoggedIn = true;
    req.session.username = _username;
    res.redirect('/profile');
  } else {
    req.session.isLoggedIn = false;
    res.send('Invalid username and password');
  }

});

app.get('/profile', (req, res) => {
  if(req.session.isLoggedIn != null && req.session.isLoggedIn == true){
    res.end(`Profile of: ${req.session.username}`);
  } else {
    res.redirect('/login');
  }
});

app.get('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/login');
});

app.get('/', (req, res) => {
  if(req.session.isLoggedIn != null && req.session.isLoggedIn == true){
    res.redirect('/profile');
  } else {
    res.redirect('/login');
  }
});

app.listen(3000, () => {
  console.log('server run at port 3000');
});