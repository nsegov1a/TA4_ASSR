const mysql = require('mysql');
module.exports = () => {
    return mysql.createConnection({
        host: "127.0.0.1",
        user:'nsegovia',
        password: 'estudiante',
        database:'Stores',
    });
}