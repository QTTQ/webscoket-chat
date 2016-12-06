//var ws=require(__dirname+"/lib/ws/server");
//var server=ws.createServer();
//server.addListener("connection",function(conn){
//	console.log(conn.id+"已连接");
//});
//
//server.listen(10800);
//	console.log("已连接10800");
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});