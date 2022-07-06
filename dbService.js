require('dotenv').config()
const mysql = require("mysql2");

console.log(process.env.USER)
var db = mysql.createPool({
  host: "daidec.c7axis5uwyq0.ap-southeast-2.rds.amazonaws.com",
  user: "admin",
  password: "password",
    // database: process.DATABASE,
  multipleStatements: true,
});

db.getConnection(function (err) {
  if (err) {
    console.log("DB connect error ...");
    console.log(err);
    throw err;
  }
});

db.services = function (callback) {
  db.query("SELECT * from API", function (err, rows) {
    callback(err, rows);
  });
};

db.saveService = function (data, callback) {
  db.query("insert into API set ?", [data], function (err, rows) {
    console.log("Err: ", err);
    console.log("The solution is: ", rows);
    callback(err, rows);
  });
};

module.exports = db;
