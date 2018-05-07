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
            "VALUES ?";
  var degerler =  [
    ['Mehmet','Naci','Beden Eğitimi']
  ];

  con.query(sql, [degerler], function (err, result) {
    if (err) throw err;
    console.log("Veri Girildi Son id : " + result.insertId);
  });
});
