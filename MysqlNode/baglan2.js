var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: ""
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("CREATE DATABASE omers DEFAULT CHARACTER SET utf8 " +
  "DEFAULT COLLATE utf8_general_ci;", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});
