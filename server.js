const http = require('http');

const server = http.createServer((req, res) => {
  res.end("Hello do Back End");
});

server.listen(process.env.PORT || 3000);