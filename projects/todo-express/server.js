const express = require('express');
const server = express();
const uuid = require('uuid')
const port = 8888

app.use(express.json())

server.listen(port,() => {
    console.log('Server is listening on port 8888!')
})

server.get('/', (req, res) => {
    res.send('Hello World')
})

server.post('/', (req, res) => {
    const updObj = req.body;
    updObj._id = uuid.v4();
})

server.post('/')

