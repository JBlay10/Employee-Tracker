-- Delete existing db with same name and creates a new one
DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

USE employee_db;

-- Creates table for department
CREATE TABLE department(
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    department_name VARCHAR(30)
);

-- creates table for employee roles
CREATE TABLE role(
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    title VARCHAR(30),
    salary DECIMAL(8,2) NOT NULL,
    department_id INT,
    FOREIGN KEY (department_id)
    REFERENCES department(id)
);

-- creates table for employee
CREATE TABLE employee(
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT,
    FOREIGN KEY (role_id)
    REFERENCES employee_roles(id),
    FOREIGN KEY(manager_id)
    REFERENCES employee(id)
);