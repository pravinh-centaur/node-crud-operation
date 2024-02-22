const mysql = require('mysql2/promise')

const mysqlPool = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'Pravinh_55',
    database: 'crud_db'
})

module.exports = mysqlPool

