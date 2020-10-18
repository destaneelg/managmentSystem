var mysql = require("mysql");
var inquirer = require("inquirer");
const cTable = require('console.table');

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "purpleR0s",
  database: "managmentSystemDB"
});

connection.connect(function(err) {
  if (err) throw err;
  runSearch();
});
function runSearch() {

    inquirer
      .prompt({
        type: "list",
        name: "task",
        message: "Please Select Yor Action",
        choices: [
          "See All Employees",
          "Search By Department",
          "New Employee",
          "Delete Employee",
          "Promote/Demote Employee",
          "New Role",
          "I'm Done"]
      })
      .then(function ({ task }) {
        switch (task) {
          case "See All Employees":
            seeAllEmployees();
            break;
          case "Search By Department":
            searchByDepartment();
            break;
          case "New Employee":
            addEmployee();
            break;
          case "Delete Employee":
            removeEmployees();
            break;
          case "Promote/Demote Employee":
            updateEmployeeRole();
            break;
          case "New Role":
            addRole();
            break;
          case "I'm Done":
            connection.end();
            break;
        }
      });
  }
  function seeAllEmployees() {
    console.log("Viewing employees\n");
  
    connection.query("SELECT * FROM employee", function (err, res) {
      if (err) throw err;
      console.table(res);
      console.log("Employees viewed!\n");
      runSearch();
    });
  }
  