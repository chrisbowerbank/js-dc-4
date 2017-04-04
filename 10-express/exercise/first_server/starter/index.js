var express = require('express')
var exphbs = require('express-handlebars')

var data = {
  'projects': [
    {
      'id': 0,
      'title': 'War - the card game',
      'description': 'Implement the game of war as a command line app'
    },
    {
      'id': 1,
      'title': 'Chicken is good',
      'description': 'describing why chicken is good'
    },
    {
      'id': 2,
      'title': 'waffles',
      'description': 'describing why waffles are good'
    }
  ]
}

var app = express()

app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.get('/', function( request, response ) {
  response.render('home', { 'title': 'Test' })
})

app.get('/projects', function( request, response ) {
  response.render('projects', data )
})

app.get('/projects/:id', function( request, response ) {

  var id = request.params.id
  var index = parseInt(id, 10)
  var project = data.projects[ index ]
  response.render( 'project', project )

})

app.listen(3000, function() {
  console.log('example app listening on port 3000')
})
