const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  if (req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    if (req.url === '/') {
      fs.readFile(
        path.join(__dirname, 'views', 'index.html'),
        'utf-8',
        (err, content) => {
          if (err) {
            throw err;
            res.end(content);
          }
        }
      );
    } else if (req.url === '/contact') {
      fs.readFile(
        path.join(__dirname, 'views', 'contact.html'),
        'utf-8',
        (err, content) => {
          if (err) {
            throw err;
            res.end(content);
          }
        }
      );
    }
  } else if (req.method === 'POST') {
    const body = [];
    req.on('data', (data) => {
      body.push(Buffer.from(data));
    });
    req.on('end', () => {
      console.log(body.toString());
    });
    res.end(`<span>Your message: <b></b></span>`);
  }
});

server.listen(4000, function () {
  console.log('Server 4000-portda ishlamoqda...');
});
