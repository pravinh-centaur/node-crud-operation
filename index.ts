import express from 'express';
import route from './operations'

const app = express()

app.use(express.json())
app.use('/test', route)

const port = process.env.PORT || 3000

//Start server
app.listen(port, () => console.log(`server started at http://localhost:${port}`))

app.get("/" , (req,res) => {
    res.send('Hello World')
})

//VERSION
app.get("/version" , (req,res) => {
    res.send('Version = 0.0.3')
})

