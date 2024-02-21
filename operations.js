const express = require('express')
const router = express.Router()

const db = require('./db_connect')

app.get("/" , async(req,res) => {
    db.query('SELECT * FROM test')
})

app.post('/', (req, res) => {
    const {name, description} = req.body

    db.query('INSERT INTO test (name, description) VALUES [?, ?]', [name, description])
})

app.put('/:id', (req, res) => {
    const id = req.params.id
    const {name, description} = req.body

    db.query('UPDATE test SET name = ?, description = ? WHERE id = ?', [name, description, id])
})

app.delete('/:id', (req, res) => {
    const id = req.params.id

    db.query('DELETE FROM test WHERE id = ?', [id])
})

