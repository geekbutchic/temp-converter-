const convertToC = require ('./f2c.js');
// console.log(convertToC)
const convertToF = require ('./c2f');


// like a function () {}
// main.js is going to be our front end file
// user interact with our app
// this file is in charge of user interaction only
// here's how the data goes through our app:

// 1. user types in the terminal 
// 2. when they hit enter, node puts their inputs 
//                  into.process.argv
// 3. we're going to send that input to our back end function 
// 4. the back end function will return an answer 
// 5. we'll print out that answer to the user 



// grab the temperature from the user
const temp = process.argv[2];
// grab the unit from the user
const unit = process.argv[3];

// feed the temperature to our function and get an answer back
// if the unit is 'c' (for celsius), go get the answer from convertToC
// and then print it

// if (unit === 'c') {
//     const celsius = (convertToC (temp))
//     console.log (celsius)
// } else {
// // otherwise, go get the answer from convertToF
// // then print it
//     const fahrenheit = convertToF(temp);
//     console.log (fahrenheit);
// }
// const result = convertToF (temp)

// console.log(result)

// print that answer for the user

// console.log (result)


// console.log (temp);
// console.log (unit);


// or, as ternary 

console.log (unit.toLowerCase () === 'c' ? convertToC(temp) : convertToF(temp));







