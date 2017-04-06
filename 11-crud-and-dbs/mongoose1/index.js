var express = require('express')
var bodyParser = require('body-parser')
var hbs = require('express-handlebars')
var mongoose = require('mongoose')
var Entry = require('./models/entry.js')

mongoose.connect('mongodb://localhost:27017/guestbook')

var app = express()

app.engine('handlebars', hbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

//what I added last
app.use( bodyParser.json() )
app.use( bodyParser.urlencoded({
  extended: true
}))
//


app.use(bodyParser.json())

app.get('/', function(req, res){
  Entry.find({}, function(err, guests){
    res.render('home', {
      name: "Christopher",
      guests: guests
    })
  })
})

app.post('/', function( req, res ) {
var currentEntry = new Entry({
  content: req.body.content,
  name: req.body.name
})
  currentEntry.save()

  Entry.find({}, function(err, guests){
    res.render('home', {
      name: 'Christopher',
      guests: guests
    })
  })
})


app.listen(3000, function() {
  console.log('your server is running')
})
