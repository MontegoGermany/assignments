const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const port = 7778
app.use(bodyParser.json())

const database = [
    {
        type: 'pasta,',
        name: 's[aghetti',
        sauce: 'red',
        id: 6666
    },{
        name: 'fettuccine',
        type: 'pasta',
        sauce: 'alfredo',
        id: 6667
    },{
        name: 'lasagna',
        type:'pasta',
        sauce: 'marinara',
        id: 6678
    }
]

app.get('/food', (req, res) => {
    res.send({database})
})

app.post('/food', (req, res) => {
    console.log(req.body)
    database.push(req.body)
    console.log(database)
    res.send(database)
})
// app.get('/', (request, response) =>{
//     response.send({sport: 'football'})
// })



app.listen(port, () => {
    console.log(`server is running ${port}`)
})