const express = require("express")

const server = express()

server.use(express.json())

server.get('/', (req, res) => {
    res.status(200).json(
        '<h1>api is up</h1>'
    )
})

module.exports = server
