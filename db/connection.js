const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  // My MySQL username,
  user: 'root',
  // My MySQL password
  password: 'password',
  database: 'election'
},
console.log('Connected to the election database.')
);

module.exports = db;
