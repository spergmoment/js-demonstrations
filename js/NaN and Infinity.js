/* NaN is pretty interesting.
Here's a demonstration. */

eval(NaN + 3); // this returns NaN, same with any other operation

eval(NaN + "34"); // also returns NaN

/* Now the interesting thing... */

console.log(typeof NaN); // this returns a number!

/* Now, for ways to get NaN... */

eval("34" + 120);

eval("hello" / 13);

/* Interestingly, when multiplying, subtracting, or dividing, JS tries to convert strings to numbers, but not with adding... */

eval("100" - 52) // returns 48

eval("15" + 9) // returns NaN

/* Infinity is also pretty interesting. */

eval(9182392787238293231 * 909237223384956621244293) // this is outside of the normal range of numbers. returns Infinity

eval(23/0) // also returns Infinity, same with any division by 0.

console.log(typeof Infinity) // also returns a number!
