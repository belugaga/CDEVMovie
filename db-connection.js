var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'dbrds1.cjb5vrcyxql7.ap-southeast-1.rds.amazonaws.com',
    port: '3306',
    user: 'admin',
    password: 'tG078568',
    database: 'movie_info'
});

connection.connect(err => {  // test out connetion and console.log error if there is one
    if (err) throw err;
    console.log('Connected To AWS DB');
}); 
module.exports = connection;

