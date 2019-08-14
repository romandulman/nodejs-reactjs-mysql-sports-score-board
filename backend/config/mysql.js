const mysql = require('mysql');
const conn = mysql.createConnection({
    host: '192.168.99.103',
    user: 'root',
    password: '41734173',
    database: 'games'
});
module.exports = conn;