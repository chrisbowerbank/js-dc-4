var express = require('express')
var exphbs = require('express-handlebars')

var pokemonData = require('./pokedex.json')

var app = express()

app.engine('handlebars', exphbs({ defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.get('/', function( req, res ) {
  // res.send('<h1>Pokedex</h1>')
  res.render('home', pokemonData )
})


app.get('/:id', function( request, response ) {

  var id = request.params.id
  var index = parseInt(id, 10)
  var pokemonIndex = pokemonData.pokemon[ index ]
  console.log( pokemonIndex )
  response.render( 'pokemon', pokemonData.id )


  // for ( var p = 0 ; p < 149 ; p++ ){
  //   if ( pokemonIndex === pokemonData.id ) {
  //     response.render( 'pokemon', pokemonData.id )
  //   } else {
  //   }
  // }

})


app.listen(3001, function() {
  console.log('your pokedex is working')
})
