const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const mustacheExpress = require('mustache-express')
const expressValidator = require('express-validator')
// const todoFunc = require('todoFunc')

const app = express()

app.engine('mustache', mustacheExpress())
app.set('view engine', 'mustache')
app.set('views', __dirname + '/views')

app.use(express.static('public'))

app.get('/', function(req, res){
  res.render('index', {
    Title: 'To-do List'
  })
})

// app.post('/todo/add', function(request, response){
//   // console.log('FORM SUBMITTED');
//   //grabing stuff typed into the inputs
//   // console.log(request.body.first_name)
//   request.checkBody('first_name', 'First Name is Required').notEmpty();
//   request.checkBody('last_name', 'Last Name is Required').notEmpty();
//   request.checkBody('email', 'Email is Required').notEmpty();
// })

app.listen(3000, function(){
  console.log('Server Started on Port 3000...')
})
