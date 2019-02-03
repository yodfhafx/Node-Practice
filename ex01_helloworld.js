const http = require('http');

http.createServer((req, res) => {
  res.end('Hi, NodeJS');
}).listen(3000);
console.log("server run at port 3000");

