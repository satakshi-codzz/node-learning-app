import dotenv from 'dotenv';
dotenv.config();
import http from 'http';
import data from './data.js';

// Server connectivity and made 
http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'application\json'});
  res.write(JSON.stringify(data));
  res.end();
}).listen(process.env.PORT);