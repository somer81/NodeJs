var mysql = require('mysql');

var bag = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: ""
});

bag.connect(function(err) {
  if (err) throw err;
  console.log("Mysql e bağlanıldı!");
  bag.query("CREATE DATABASE nodeverisi3", function (err, result) {
    if (err) throw err;
    console.log("Veri Tabanı oluşturuldu");
  });
});
