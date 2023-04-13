const express = require('express')
const phones = require('./phones.json')
const cors = require('cors')

const app = express()
app.use(cors())
const port = 5001;

app.get('/', (req, res)=> {
    res.send('This is our Phone server home page data comming sooon')
})

// responding all data
app.get('/phones', (req, res)=> {
    res.send(phones)
})

// getting single data
app.get('/phone/:id', (req,res)=> {
    const id = parseInt(req.params.id, 10)
    const phone = phones.find(ph => ph.id === id) || {}
    res.send(phone)

})


app.listen(port, ()=> {
    console.log(`Listening to the port ${port}`);
})


