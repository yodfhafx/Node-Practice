const express = require('express');
const router = express.Router();

router.route('/comment')
.get((req, res) => {
  res.end('comment get');
})
.post((req, res) => {
  res.end('comment post');
})
.put((req, res) => {
  res.end('comment put');
})
.delete((req, res) => {
  res.end('comment delete');
});

router.route('/stock')
.get((req, res) => {
  res.end('stock get');
})
.post((req, res) => {
  res.end('stock post');
})
.put((req, res) => {
  res.end('stock put');
})
.delete((req, res) => {
  res.end('stock delete');
});

module.exports = router;