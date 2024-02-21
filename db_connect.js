const mysql = require('mysql2/promise')

const msqlPool = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'Pravinh_55',
})

msqlPool.query("SELECT 1")
    .then(console.log("db connection succeeded."))
    .catch(err => console.log('db connection failed.'))