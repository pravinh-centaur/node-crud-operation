const express = require('express')
const router = express.Router()

const db = require('./db_connect')

//READ
router.get("/" , (req,res) => {
    db.query('SELECT * FROM test')
        .then(data => res.send(data))
        .catch(err => console.log(err))
})

//CREATE
router.post('/', (req, res) => {
    const {name, description} = req.body

    db.query('INSERT INTO test (name, description) VALUES [?, ?]', [name, description])
        .then(res.send('Created.'))
        .catch(err => console.log(err))
})

//UPDATE
router.put('/:id', (req, res) => {
    const id = req.params.id
    const {name, description} = req.body

    db.query('UPDATE test SET name = ?, description = ? WHERE id = ?', [name, description, id])
        .then(res.send('Updated.'))
        .catch(err => console.log(err))
})

//DELETE
router.delete('/:id', (req, res) => {
    const id = req.params.id

    db.query('DELETE FROM test WHERE id = ?', [id])
        .then(res.send('Deleted.'))
        .catch(err => console.log(err))
    
})

module.exports = router
