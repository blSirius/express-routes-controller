const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost', 
    user: 'root', 
    password: '', 
    database: 'to_do_list', 
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports = pool.promise();