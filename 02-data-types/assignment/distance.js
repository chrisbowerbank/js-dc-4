<<<<<<< HEAD
//## Distance Formula

// The purpose of this assignment is to build a program that will calculate the distance between two points, given two sets of x and y coordinates.
//
// As a refresher (since it's probably been a while since you've done any geometry!), the distance formula works like this: given a point x1, y1 and another point x2, y2 on a graph, we can calculate the distance between these two points by following these steps:
//
// 1. subtract x2 from x1 to get deltaX
// 2. subtract y2 from y1 to get deltaY
// 3. square both deltaX and deltaY
// 4. add the square of deltaX to the square of deltaY
// 5. take the square root of the sum of step 4



var x1 = 1
var y1 = 3

console.log(x1)
console.log(y1)


var x2 = 10
var y2 = 15

console.log(x2)
console.log(y2)

var deltaX = ( x2 - x1)
console.log( 'deltaX = ' + deltaX )

var deltaY = ( y2 - y1)
console.log( 'deltaY = ' + deltaY )

console.log(Math.pow(deltaX,2))
console.log(Math.pow(deltaY,2))

console.log(Math.pow(deltaX,2) + Math.pow(deltaY,2))

console.log('The answer is: ' + Math.sqrt(Math.pow(deltaX,2) + Math.pow(deltaY,2)))
=======
var X1 = 1
var Y1 = 3
var X2 = 10
var Y2 = 15
var comma = ","

var sumXsD2 = (X1 + X2) / 2
var sumYsD2 = (Y1 + Y2) / 2
console.log(sumXsD2)
console.log(sumYsD2)
console.log(sumXsD2, comma, sumYsD2)
>>>>>>> 111a8ab0e3f71a7fd7bf91634bc416a9772fec36
