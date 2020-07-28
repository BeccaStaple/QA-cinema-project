"user strict";

const mysql = require("mysql");

const password = require("./dbpassword");

// remote database connection
let connection = mysql.createConnection({
  host: "35.242.149.34",
  user: "root",
  password: password,
  database: "cinemaDB",
});

connection.connect(function (err) {
  if (err) console.log(err);
});

module.exports = connection;
