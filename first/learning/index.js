require('dotenv').config()

const express = require('express')

const app = express()

const port =  process.env.PORT || 4000

app.get('/', (req, res) => {
    res.send('hello world')
})

app.get('/twitter', (req, res) => {
    res.send('justmekartik')
})

app.get('/login', (req, res) => {
    res.send('<h1>plz login brother</h1>')
})

app.get('/kartik', (req, res) => {
    res.send('<ul><li>Name: kartik</li><li>age: 22</li><li>job: finding one</li><li>possible?: yessir</li></ul>')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
} )