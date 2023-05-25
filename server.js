const http = require('http');

const server = http.createServer((req, res) => {
  // header
  res.setHeader('Content-Type', 'text/html'); // to show the html content
  
  // Content
  res.write('<h3>Some response...</h3>');
  res.end();
});

server.listen(3000, 'localhost', () => {
  console.log('Server running...');
});
