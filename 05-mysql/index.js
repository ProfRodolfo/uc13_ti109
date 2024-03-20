const express = require('express')
const exphbs = require('express-handlebars')

const mysql = require('mysql2')

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('views engine', 'handlebars' )
app.use(express.static('public'))


app.use (
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json())


app.get('/', function (req, res) {
    res.render('home')
})


// app.post('/books/insertbook') {
//     function (req, res){

//     }
// }