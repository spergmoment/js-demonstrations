/* Async/Await are powerful functions.
This is a basic demonstration of
what these are.

You should probably read up on promises.

But, in a nutshell, promises are used for
getting the state of anything that is
attached to a callback function. They
are very useful. */

var p = prompt("Enter a number.");

async function pr(n) { // this takes a prompt, which returns the user input, and promisifies it
  var x = p*(Math.floor(Math.random()*13)+2); // returns a value that is the prompt times a random number between 2 and 13.
  await window.alert("The number returned is: " + x); // await pauses the function until the thing it's attached to is fulfilled
}
pr(p);

/* Promises are mainly useful for when you need to
have some code that should be caught at any time,
and also code that needs to wait for something before 
anything else happens. */

function resolve() {
  return new Promise(re => { // creates a new Promise object
    re("This is a promise that has been resolved.");
  });
}

async function run() { // creates a new async function
  try {
    let resolveFunction = await resolve(); // waits for it to be resolved
    console.log(resolveFunction); // logs the resolve.
    const y = 32;
    y = 1; // creates a constant, and tries to change it.
  } catch (err) { // catches the error...
    await console.log("Error!\n" + err); // and shows the error, in this case we tried to change a constant, or the Promise resolution failed
  }
}
run();

/* This is a very basic demonstration of
Promises, async, and await. Check the
MDN page on it for a better understanding. */

/* Example output:
This is a promise that has been resolved.
Error!
TypeError: Assignment to constant variable.
Promise {
[[PromiseStatus]]:
resolved
[[PromiseValue]]:
undefined
}
*/
