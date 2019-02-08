const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, '/public')));

app.get('/download', (req, res) => {
  res.download(path.join(__dirname, '/public/images/minions.jpg'));
});

app.get('/send', (req, res) => {
  res.send('Welcome send');
});

app.get('/end', (req, res) => {
  res.write('Hi');
  res.write(' NodeJS');
  // res.end();
  res.end(' Welcome');
});

app.get('/redirect', (req, res) => {
  res.redirect('/json');
});

app.get('/json', (req, res) => {
  var data = {result: 'ok', message: 'test'};
  res.json(data);
});

app.get('/file', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.get('/status', (req, res) => {
  // res.status(404).send('page not found');
  res.status(500).send({error: 'something went wrong'});
});

app.listen(3000, () => {
  console.log('server run at port 3000');
});