'use strict';
// declare a variable a and initialize it to the value 'Ewin'
let a = 'Ewin';
// let a = 'Tugba';
// let a = 'Jo';
// let a = 'Olesandra';

// read the variable a
// declare a variable b and initialize it to the value 'Hello Ewin, your name is'
let b = 'Hello ' + a + ', your name is ';

// check if the length is greater than 4 (string length :
// is the number of characters the string has )

//read the variable a 
if (a.length > 4) {

  //readthe variable b
  //assign the variable b
  b = b + 'long.';
  // read the variable a
} else if (a.length === 4) {

  // read the variable b
  // assign the variable b
  b = b + 'perfect.';
} else {
   // read the variable b
   // assign the variable b
  b = b + 'short.';
}

// read the variable b
console.log(b);
