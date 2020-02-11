/* Let's go over some basic string stuff. */
var str = "hello!"; // generates a string

var str2 = "hello!\nhow are you?";
/* The above returns this: "hello!
how are you?"
\n means a linebreak. 
there are more things similar to this, 
but \n is the most useful. */

var str3 = "hello! my name is sperg. " + Math.random() * 10; 
/* This returns "hello! my name is sperg." 
and concatenates (adds) a random number between 1 and 10. */

var str4 = "hello! how are you?" +
"my name is sperg." // returns the string "hello! how are you? my name is sperg."
/* Doing that is useful for code readability, especially with long strings. */
