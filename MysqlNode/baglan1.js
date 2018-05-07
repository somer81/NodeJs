var mysql = require('mysql');

var bag = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: ""
});

bag.connect(function(err) {
  if (err) throw err;
  console.log("Bağlantı Başarılı!");
});
