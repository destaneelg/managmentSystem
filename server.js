var mysql = require("mysql");
var inquirer = require("inquirer");
const cTable = require('console.table');

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: “managmentSystem”
});

connection.connect(function(err) {
  if (err) throw err;
  runSearch();
});
