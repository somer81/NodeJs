var mysql = require('mysql');

var bag = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  password : '',
  database : 'omers' });

  bag.connect(function(hata){
     if(hata) throw hata;
     console.log("Bağlantı Başarılı");
   });

     var sql = "CREATE TABLE ogrenciler(ogrno INT AUTO_INCREMENT, " +
      "ad VARCHAR(50) NOT NULL, soyad VARCHAR(50) NOT NULL, " +
      + " bolum VARCHAR(50) NOT NULL," +
      " PRIMARY KEY(ogrno));";

      bag.query(sql, function(h, sonuc){
        if(h) throw h;
        console.log("Veri tabanı Oluşturuldu");
      });
