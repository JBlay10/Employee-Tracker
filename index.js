const inquirer = require('inquirer');
const db = require('./config/connection')
require('console.table');


// db.connect((err) => {
//     if (err) throw err;
//     start();
// })

// This will be the main menu options for adding and viewing the db
const promptOptions = { 
    viewDepart: "View Departments",
    viewRoles: "View Roles",
    viewEmployees: "View Employees",
    addDepart: "Add Department",
    addRole: "Add Role",
    addEmployee: "Add Employee",
    updateEmployee: "Update Employee",
    exit: "Exit"
};

// Inquirer questions and selections
function menu() {
    inquirer
    .prompt([
        {
            type: "list",
            name: "menu",
            message: "Let's get started. What would you like to do?",
            choices: [
                promptOptions.viewDepart,
                promptOptions.viewRoles,
                promptOptions.viewEmployees,
                promptOptions.addDepart,
                promptOptions.addRole,
                promptOptions.addEmployee,
                promptOptions.updateEmployee,
                promptOptions.exit
            ]
        }
    ])
    .then(answer => {
        switch (answer.menu) {
            case promptOptions.viewDepart:
                viewDepart();
                break;

            case promptOptions.viewRoles:
                viewRoles();
                break;

            case promptOptions.viewEmployees:
                viewEmployees();
                break;

            case promptOptions.addDepart:
                addDepart();
                break;

            case promptOptions.addRole:
                addRole();
                break;

            case promptOptions.addEmployee:
                addEmployee();
                break;

            case promptOptions.updateEmployee:
                updateEmployee();
                break;

            case promptOptions.exit:
                exit();
                break;
        }
    });
}

// functions that will be called after a prompt is selected
function viewDepart() {
    db.promise().query('SELECT * FROM department').then(departmentInfo => {
        console.table(departmentInfo[0])
        menu();
    })
}

function viewRoles() {
    db.promise().query("SELECT * FROM employee_roles").then(rolesInfo => {
        console.table(rolesInfo[0])
        menu();
    })
}

function viewEmployees() {
    db.promise().query('SELECT * FROM employee').then(employeeInfo => {
        console.table(employeeInfo[0])
        menu();
    })
}

function addDepart() {
    inquirer
    .prompt([
        {
            type: "input",
            name: "department_name",
            message: "Please enter the name of the new department, example: Managers, Kitchen Staff, etc."
        }
    ])
    .then((answers) =>{
        db.query('INSERT INTO department SET ?', answers, (err, res) => {
            if (err) throw err;
            console.log("Successfully added to departments!");

            menu();
        })
    })
}

function addRole() {
    inquirer
    .prompt([
        {
            type: "input",
            name: "title",
            message: "Please enter the name of the new role."
        },
        {
            type: "input",
            name: "salary",
            message: "Please enter a salary ammount."
        },
        {
            type: "input",
            name: "department_id",
            message: "Please enter the department id."
        }
    ])
    .then((answers) =>{
        db.query('INSERT INTO employee_roles SET ?', answers, (err, res) => {
            if (err) throw err;
            console.log("Successfully added to roles!");

            menu();
        })
    })
}

function addEmployee() {
    inquirer
    .prompt([
        {
            type: "input",
            name: "first_name",
            message: "Please enter the first name of the new employee."
        },
        {
            type: "input",
            name: "last_name",
            message: "Please enter the last name of the new employee."
        },
        {
            type: "input",
            name: "role_id",
            message: "Please enter the role id."
        },
        {
            type: "input",
            name: "manager_id",
            message: "Please enter the manager id."
        }
    ])
    .then((answers) =>{
        db.query('INSERT INTO employee SET ?', answers, (err, res) => {
            if (err) throw err;
            console.log("Successfully added to employees!");

            menu();
        })
    })
}

function updateEmployee() {
    // inquirer
    // .prompt([
    //     {
    //         type: "input",
    //         name: "employee_id",
    //         message: "Please enter new employee id."
    //     },
    //     {
    //         type: "input",
    //         name: "role_id",
    //         message: "Please enter new employee role."
    //     }
    // ])
    // .then((answers) => {
    //     db.query('UPDATE employee SET manager_id = ? WHERE id = ?', answers, (err, res) => {
    //         if (err) throw err;
    //         console.log("Successfully updated employee!");

    //         menu();
    //     })
    // })
    menu();
}

function exit() {
    menu();
}

menu();