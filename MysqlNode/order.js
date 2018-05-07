var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "omers"
});

con.connect(function(err) {
  if(err)
  {
    throw err;
  }

  console.log("Bağlandı!");
  var sql = "SELECT * FROM ogrenciler ORDER BY ad DESC";

  con.query(sql, function (err, result) {
    if (err) throw err;
    for(var i = 0; i < 8 ; i++)
    console.log(result[i].ad);
  });
});
