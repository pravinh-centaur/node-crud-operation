import { Router, Request, Response, NextFunction } from 'express';

const router = Router();
import knex from './db_connect'

//READ
router.get("/data" , (req,res) => {
    knex.select('*').from('test')
        .then(data => res.send(data))
        .catch(err => console.log(err))
})

//CREATE
router.post('/data', (req, res) => {
    const {name, description} = req.body

    knex('test').insert({name, description})
        .then(() => res.send('Created.'))
        .catch(err => console.log(err))
})

//UPDATE
router.put('/data/:id', (req, res) => {
    const id = req.params.id
    const {name, description} = req.body

    knex('test').where('id', id).update({
        'name': name,
        'description': description
    })
        .then(() => res.send('Updated.'))
        .catch(err => console.log(err))
})

//DELETE
router.delete('/data/:id', (req, res) => {
    const id = req.params.id

    knex('test').where('id', id).del()
        .then(() => res.send('Deleted.'))
        .catch(err => console.log(err))
    
})



export default router;
