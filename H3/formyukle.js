var http = require('http');
var formidable = require('formidable');
var fs = require('fs');

  http.createServer(function (req, res) {
    if(req.url == '/fileupload'){
      var form = new formidable.IncomingForm();
      form.parse(req, function(err,fields,files){
        var geciciYol = files.filetoupload.path;
        var hedefYol  = 'd:\\' + files.filetoupload.name;
        fs.rename(geciciYol,hedefYol, function(err){
          if(err) throw err;
          res.write('Dosya Basarili Yuklendi ve Klasore Tasindi');
          res.end();
        });
      });
    }
    else{
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
  res.write('<input type="file" name="filetoupload"><br>');
  res.write('<input type="submit" value="Dosya Yukle">');
  res.write('</form>');
  return res.end();
}
}).listen(8080);
