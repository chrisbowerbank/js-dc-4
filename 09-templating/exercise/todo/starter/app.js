var data = {
  todos: [
    'learn html',
    'learn css',
    'learn js'
  ]
}



// function submit( data ){
//
//   var app = document.getElementById('app')
//   var templateSource = document.getElementById('to-do-template')
//   var template = Handlebars.compile( templateSource.innerHTML )
//   var renderedTemplate = template( data )
//
//   app.innerHTML = renderedTemplate
//
// }



var button = document.getElementById('button')

button.addEventListener( 'click' , submit( e ) {
  e.preventDefault()

  var app = document.getElementById('app')
  var templateSource = document.getElementById('to-do-template')
  var template = Handlebars.compile( templateSource.innerHTML )
  var renderedTemplate = template( data )

  app.innerHTML = renderedTemplate
} )
