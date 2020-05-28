const express = require('express')
const bodyParse = require('body-parser')
const app = express()

app.use(bodyParse.urlencoded({ extended: true }))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.post('/show', (req, res) =>{
    console.log(req.body)
})

app.listen(3000, function() {
    console.log('server rodando')
})
