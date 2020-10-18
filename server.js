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
          "See All Departments",
          "See All Roles",
          "New Role",
          "New Employee",
          "New Department",
          "Delete Employee",
          "Promote/Demote Employee",
          "I'm Done"]
      })
      .then(function ({ task }) {
        switch (task) {
          case "See All Employees":
            seeAllEmployees();
            break;
          case "See All Departments":
            seeAllDepartment();
            break;
            case "See All Roles":
            seeAllRoles();
            break;
            case "New Role":
              addRole();
              break;
          case "New Employee":
            addEmployee();
            break;
            case "New Department":
              addDepartment();
              break;
          case "Delete Employee":
            removeEmployees();
            break;
          case "Promote/Demote Employee":
            updateEmployeeRole();
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
  };
  function seeAllDepartment() {
    console.log("Viewing Departments\n");
  
    connection.query("SELECT * FROM department", function (err, res) {
        if (err) throw err;

        console.table(res);

        console.log("Departments viewed!\n");
        runSearch();
    });
  };
  function seeAllRoles() {
    console.log("Viewing Roles\n");
  
    connection.query("SELECT * FROM role", function (err, res) {
        if (err) throw err;

        console.table(res);

        console.log("Roles viewed!\n");
        runSearch();
    });
  }
  function addRole() {
    connection.query("SELECT * FROM department", (err, results) => {
        if(err) throw err;
         inquirer.prompt([
            {
                message: "What is the title of the new role?",
                type: "input",
                name: "title"
            },
            {
                message: "What's the new roles salary?'?",
                type: "input",
                name: "salary",
            },
            {
                message: "What department will this role be in?",
                type: "list",
                name: "departmentId",
                choices: results.map(department => {
                    return {
                        name: department.name,
                        value: department.id
                    }
                })
            }
        ]).then((response) => {
            connection.query("INSERT INTO role (title, salary, department) VALUES (?, ?, ?)", [response.title, response.salary, response.departmentId], (err, result) => {
                console.log("NEW JOB ROLE ADDED!");
                runSearch();
            });
        });
    });
}
function addEmployee() {
  connection.query("SELECT * FROM role", (err, results) => {
      if(err) throw err;
       inquirer.prompt([
          {
              message: "What is the first name of your new hire",
              type: "input",
              name: "firstName"
          },
          {
              message: "What is the last name of your new hire?",
              type: "input",
              name: "lastName",
          },
          {
            type: "list",
            name: "roleId",
            message: "What is the employee's role?",
            choices: [
                "5. Bank Teller",
                "6. Risk  Managment Specialist",
                "7 Risk  Manager",
                "8 Cyber Security",
                "9 HR Manager",
                "10 Data Center Security Engineer"
            ]
        },
        {
            type: "number",
            name: "managerId",
            message: "What is the ID of your employee's manager?"
        }
    ]).then(function (res) {
        var departmentSelect = res.roleId.split(" ");
        connection.query("INSERT INTO employee (firstName, lastName, roleId, managerId) VALUES (?, ?, ?, ?)", [res.firstName, res.lastName, departmentSelect[0], res.managerId], function (err, data) {
            if (err) throw err;
            console.table("YOU HAVE SUCCESSFULLY ADDED YOUR NEW HIRE!");
            runSearch();

        });
    });
  }
  )};
  function addDepartment() {
    inquirer.prompt([
        {
            type: "input",
            name: "departmentName",
            message: "What is the name of your new department"
        }
    ]).then(function (res) {
        connection.query("INSERT INTO department (name) VALUES (?)", [res.departmentName], function (err, data) {
            if (err) throw err;
            console.table("YOUR NEW DEPARTMENT HAS BEEN ADDED!");
            runSearch();
        })
    })
};
function removeEmployees() {
  connection.query("SELECT id, firstName, lastName FROM employee").map(employee => ({
    name: `${employee.firstName} ${employee.lastName}`,
    value: employee.id
}))
  const employeeId =
      inquirer.prompt(
          {
              type: "list",
              name: "employeeName",
              message: "Select the employee you want to delete:",
              choices: employeeChoices
          })
          connection.query("DELETE from employee where id=?", [employeeId.employeeName]);
  console.log("YOUR EMPLOYEE HAS BEEN DELETED!")
  runSearch();
}

  function updateEmployeeRole() {
    connection.query("SELECT * FROM employee", (err, employee) => {
        if(err) throw err;

        connection.query("SELECT * FROM role", (err, role) => {
            if(err) throw err;

            inquirer.prompt([
                {
                    message: "Which employee's role would you like to update?",
                    type: "list",
                    name: "employyeeId",
                    choices: employee.map(employee => {
                        return {
                            name: `${employee.firstName} ${employee.lastName}`,
                            value: employee.id
                        }
                    })
                },
                {
                    message: "Which role would you like to move them into?",
                    type: "list",
                    name: "roleId",
                    choices: role.map(role => {
                        return {
                            name: role.title,
                            value: role.id
                        }
                    })
                }
            ]).then((response) => {
                connection.query("UPDATE employee SET ? WHERE ?", 
                [
                    {
                        roleId: response.roleId
                    },
                    {
                        id: response.employeeId
                    }
                ],
                 (err, result) => {
                    console.log("EMPLOYEE UPDATED!");
                    runSearch();
                });
            });
        })
    });
  };
