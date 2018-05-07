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
  var sql = "SELECT * FROM ogrenciler ORDER BY ad LIMIT 3,3";

  con.query(sql, function (err, sonuc, alanlar) {
    if (err) throw err;
    for(var i = 0 ; i < sonuc.length ; i++)
    console.log(sonuc[i].ad + " " + sonuc[i].soyad );
    //console.log(alanlar);
  });
});
