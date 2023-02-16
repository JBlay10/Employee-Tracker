const mysql = require('mysql2')
require('dotenv').config();

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: 'employees_db'
    },
    console.log('Connected to the Employee DB')
);

module.exports = db;