var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "omers"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("omers e Bağlandı!");
  var sql = "CREATE TABLE ogrenciler(ogrno INT AUTO_INCREMENT, " +
   "ad VARCHAR(50) NOT NULL, soyad VARCHAR(50) NOT NULL, " +
   + " bolum VARCHAR(50) NOT NULL," +
   " PRIMARY KEY(ogrno))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Tablo Oluştu");
  });
});
