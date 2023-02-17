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
    menu();
}

function addRole() {
    menu();
}

function addEmployee() {
    menu();
}

function updateEmployee() {
    menu();
}

function exit() {
    menu();
}

menu();