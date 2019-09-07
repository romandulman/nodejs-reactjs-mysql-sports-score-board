const mysql = require('mysql');
const conn = mysql.createConnection({
    host:  '' ,//'172.17.0.2',
    user:   '',           // 'devadmin',
    password: '',
    database: 'games'
});
module.exports = conn;
