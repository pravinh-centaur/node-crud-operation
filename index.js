const express = require('express')
const app = express()
const knex = require('./db_connect')
const route = require('./operations')

app.use(express.json())
app.use('/test', route)

//Test for db connection, start server if success
knex.select().from('test')
    .then(() => {
        console.log("db connection succeeded.")
        app.listen(3000, () => console.log('server started at 3000'))
    })
    .catch(err => console.log(err))

