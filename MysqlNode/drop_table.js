var mysql = require('mysql');

var bag = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password : '',
  database : 'omers'
});


bag.connect(function(err){
    if(err) throw err;

  var sql = "DROP TABLES customers";

  bag.query(sql,function(err,sonuc){
    if(err) throw err;
    console.log("Tablo Silindi");
  });

});
