const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.post('/login', (req, res) => {
  res.write('username: '+ req.body.username);
  res.write(', password: '+ req.body.password);
  res.end();
});

app.listen(3000, () => {
  console.log('server run at port 3000');
});