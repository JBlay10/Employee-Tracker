const mysql = require('mysql2')
require('dotenv').config();

const db = mysql.createConnection(
    {
        host: '127.0.0.1',
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: 'employee_db',
        port:3306,
    },
    console.log('Connected to the Employee DB')
);

module.exports = db;