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
}

// functions that will be called after a prompt is selected
function viewDepart() {
    db.promise().query('SELECT * FROM employee').then(employeeInfo => {
        console.table(employeeInfo[0])
        menu();
    })
}

function viewRoles() {
    
}

function viewEmployees() {
    
}

function addDepart() {
    
}

function addRole() {
    
}

function addEmployee() {
    
}

function updateEmployee() {
    
}

function exit() {

}