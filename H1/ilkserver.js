var http = require('http');

http.createServer(function(req,res){
  res.writeHead(200,{'Content-Type': 'text/html'});
  res.end('VKMYO Bilgisyar Programlama');
}).listen(8080);
