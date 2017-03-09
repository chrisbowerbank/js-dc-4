/*
Warm up

2,520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

*/


// 16, 8, 4, 2
// 18, 9, 3
// 20, 10
// 17
// 15, 5
// 14, 7
// 13
// 11, 1
// 12, 6


//

p = [ 20, 19, 18, 17, 16, 15, 14, 13, 12, 11 ]

var i = false
var k = 0
while (i === false) {
    k = k+1
    //if ((k % 11===0) && (k%12===0) && (k%13===0)) {
    if ((k % 2===0) && (k % 3===0) && (k % 4===0) && (k % 5===0) && (k % 6===0) && (k % 7===0) && (k % 8===0) && (k % 9===0) && (k % 10===0)) {
        i = true
        console.log(k)
    }

}
