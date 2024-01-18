// Immediately Invoked Function Expressions (IIFE)

(function one(){
    console.log(`DB CONNECTED`);
})();

// Why IIFE use? => Global scope ke pollution se problem hoti hai kai bar to global scope ke variable ke problem ko hatane ke liye use karte hai 
 
// ()() // ==> first parenthesis is denoted by definition of function and second parenthesis is denoted by execution call

// (function aurcode(){
//     console.log(`DB CONNECTED TWO`);
// })()

// => this is a arrow function

( (name) => {
    console.log(`DB CONNECTED TWO  ${name}`)
})('sanjay')