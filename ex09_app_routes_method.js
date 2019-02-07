const express = require('express');
const app = express();

app.route('/test')
.get((req, res) => {
  res.end('get');
})
.post((req, res) => {
  res.end('post');
})
.put((req, res) => {
  res.end('put');
})
.delete((req, res) => {
  res.end('delete');
});

app.listen(3000, () => {
  console.log('server run at port 3000');
});