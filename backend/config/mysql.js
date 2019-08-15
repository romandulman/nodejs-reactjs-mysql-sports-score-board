const mysql = require('mysql');
const conn = mysql.createConnection({
    host: '192.168.2.14',
    user: 'devadmin',
    password: '41734173',
    database: 'games'
});
module.exports = conn;