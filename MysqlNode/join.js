var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "omers"
});

con.connect(function(err) {
  if (err) throw err;
  var sql = "SELECT m.ad as Musteri, u.ad AS Urun FROM musteri AS m JOIN urunler AS u ON m.favori_urun = u.uid";
  con.query(sql, function (err, result) {
    if (err) throw err;
    for(var i = 0 ; i < result.length ; i++)
    console.log("Müşteri : " + result[i].Musteri + " Ürün : " + result[i].Urun);
  });
});
