import express from 'express';
import route from './operations'

const app = express()

app.use(express.json())
app.use('/test', route)

//Start server
app.listen(3000, () => console.log('server started at http://localhost:3000'))

app.get("/" , (req,res) => {
    res.send('Hello World')
})

