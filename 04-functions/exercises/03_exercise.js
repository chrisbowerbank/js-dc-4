/*

Write a function called average that calculates and returns the
average of two numbers passed in as parameters. Save your return value
to a variable and `console.log` it!

*/


function average( Num1, Num2 ) {
  return ( Num1 + Num2 ) / 2
}

var avg = average( 2, 12 )

console.log( avg )






/*

Write a function that calculates and returns the distance between two
points. Your function should take two arrays as paramaters and return
the distance between the two points. Save your return value to a
variable and `console.log` it!

*/


function distance( [x1, y1], [x2, y2] ) {
  return ( Math.sqrt( Math.pow( ( x2 - x1 ), 2) + Math.pow( ( y2 - y1 ), 2) ) )
}

var hypot = distance( [0,0], [3,7])

console.log( hypot )
