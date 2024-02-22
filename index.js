const express = require('express')
const app = express()
const db = require('./db_connect')
const route = require('./operations')

app.use('/test', route)

//Test for db connection, start server if success
db.query("SELECT 1")
    .then(() => {
        console.log("db connection succeeded.")
        app.listen(3000, () => console.log('server started at 3000'))
    })
    .catch(err => console.log('db connection failed.'))
