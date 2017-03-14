/*

Working with Objects

Your car from Exercise 1 should have atleast 4 properties, at least one of
which is a method. Use it to answer the prompts below.

*/


/*

Redeclare your car here. It can either by by typing it out again or by
copying and pasting it here. Make sure you're assigning your car object to a
variable and that it meets the conditions above of having at least 4
properties, one of which is a method

*/



var Gto = {
  'topspeed': 250,
  'color': 'yellow',
  'horsepower': 700,
  gpsLocation: function ( coordinates ) {
    console.log( "The car's coordinates:" + [ Math.random(), Math.random()] )
  }

}




/*

Get one of the properties from your object using dot notation

*/


Gto.color
console.log( Gto.color )



/*

Get one of the properties from your object using bracket notation

*/

Gto['color']




/*

Set one of the values of one of your properties using either dot notation or
bracket notation

*/

Gto.horsepower = 350
console.log( Gto.horsepower )


/*

Call your car's method

*/


Gto.gpsLocation()
