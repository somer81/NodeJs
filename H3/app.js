var fs = require('fs');
var ds = fs.createReadStream('./deneme.txt');

ds.on('open', function(){

  console.log('Dosya Açık...');

});
