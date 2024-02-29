import Knex from 'knex';

const knex = Knex({
    client: 'mysql2',
    connection: {
        host:'localhost',
        user:'root',
        password:'',
        database: 'crud_db'
    }
})

export default knex

