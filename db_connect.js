const knex= require('knex')({
    client: 'mysql2',
    connection: {
        host:'localhost',
        port: '3306',
        user:'root',
        password:'password',
        database: 'crud_db'
    }
})

module.exports = knex

