const mysql = require('mysql');
const conn = mysql.createConnection({
    host:  '172.17.0.2',//'192.168.2.14' ,
    user: 'devadmin',
    password: 'Logic41734173!',
    database: 'games'
});
module.exports = conn;