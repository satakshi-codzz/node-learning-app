require("dotenv").config();

// Simple server connectivity 
// const http = require("http");
// http.createServer((req, res) => {
//     res.write("Yor are successfully create a server");
//     res.end()
// }).listen(process.env.PORT);

// Server connectivity and made 
const data = require('./data');
const http = require('http');

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'application\json'});
  res.write(JSON.stringify(data));
  res.end();
}).listen(process.env.PORT);