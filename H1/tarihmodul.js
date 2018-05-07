var http = require('http');
var dt = require('./ilkmodule');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("Tarih ve Saat: " + dt.myDateTime());
    res.end();
}).listen(8080);
