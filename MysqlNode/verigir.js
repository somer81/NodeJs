var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "omers"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Bağlandı!");
  var sql = "INSERT INTO ogrenciler(ad,soyad,bolum) " +
            "VALUES ('Ahmet','Tekin','Bilgisayar'), " +
                    "('Ayşe','Mert','Muhasebe')";

  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Veri Girildi");
  });
});
