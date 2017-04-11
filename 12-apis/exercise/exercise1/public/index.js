//set up express server
var express = require('express')
var exphbs  = require('express-handlebars')
//need to load in handlebars and Schema

var app = express()

app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.get('/', function( req, res ) {
  res.render('home', //what goes here? )
})


app.get('/pokemon/:id', function( req, res ) {
  var pokemon = getPokemon( req.params.id )
  res.render('pokemon', pokemon)
})


var searchForm = document.querySelector('#searchForm')
searchForm.addEventListener('submit', function( e ) {
  e.preventDefault()

  // Get the value entered by the user
  var submission = document.querySelector('input[name="city"]').value


  // 1. Make the request to pokedex API - find it here: http://pokeapi.co/api/v2/pokemon/1/ for bulbasaur
  var request = new XMLHttpRequest()
  request.onreadystatechange = handleRequest()

  request.open('GET', 'http://pokeapi.co/api/v2/pokemon/1/' + id )
  request.send(null)


}

app.listen( 3000, function() {
  console.log( 'Your pokedex is working' )
})
