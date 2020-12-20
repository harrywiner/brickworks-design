const express = require('express')
const request = require('request')

var app = express()

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/'));

app.get('/', (req, res) => {
    res.send('Hello Boozer!')
})
  
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})

