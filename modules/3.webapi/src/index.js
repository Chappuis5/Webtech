const express = require('express')
const router = require('./routes')
const bodyParser = require('body-parser')

const app = express()
const port = 8080

app.use(bodyParser.json())

app.use('/', router)

const server = app.listen(port, (err) => {
    if(err) throw err
    console.log("Server listening to port " + port)
})

module.exports = server