var mysql = require('mysql');

var bag = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password : '',
  database : 'omers'
});


bag.connect(function(err){
    if(err) throw err;

  var sql = "DELETE FROM ogrenciler WHERE ogrno = 8";

  bag.query(sql,function(err,sonuc){
    if(err) throw err;
    console.log(sonuc.affectedRows + " kayıt silindi");
  });

});
