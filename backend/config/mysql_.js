const mysql = require('mysql');
const conn = mysql.createConnection({
    host:  'sql-server-ip',//'192.168.2.14' ,
    user: 'sql-user',
    password: 'password',
    database: 'games'
});
module.exports = conn;