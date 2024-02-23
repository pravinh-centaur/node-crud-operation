const express = require('express')
const router = express.Router()

const knex = require('./db_connect')

//READ
router.get("/" , (req,res) => {
    knex.select('*').from('test')
        .then(data => res.send(data))
        .catch(err => console.log(err))
})

//CREATE
router.post('/', (req, res) => {
    const {name, description} = req.body

    knex('test').insert({name, description})
        .then(res.send('Created.'))
        .catch(err => console.log(err))
})

//UPDATE
router.put('/:id', (req, res) => {
    const id = req.params.id
    const {name, description} = req.body

    knex('test').where('id', id).update({
        'name': name,
        'description': description
    })
        .then(res.send('Updated.'))
        .catch(err => console.log(err))
})

//DELETE
router.delete('/:id', (req, res) => {
    const id = req.params.id

    knex('test').where('id', id).del()
        .then(res.send('Deleted.'))
        .catch(err => console.log(err))
    
})

module.exports = router
