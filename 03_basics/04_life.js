//Immediately invoked function expressions (IIFE)

//if we want to don't to call a function, and want to invoke directly or that function which execute immediately
(function chai() {
    // named IIFE
    console.log(`DB CONNECTED`); //DB CONNECTED
})(); // we have to use this ";" to stop the context (to end the function otherwise if we write any function below it it will throw error)


//() => 1st parenthesis where we are writing the defination of the function
//() => 2nd parernthesis is the execution call like to call the function "chai()"

//this we do because sometimes global scope pollution can create problem, to remove this pollution, we use this calling type of functions


//arrow function (unnamed IIFE)
(  () => console.log(`DB CONNECTED TWO`)
)(); //DB CONNECTED TWO


//if we want to pass any parameter
( (num1, num2) => console.log(`Sum => ${num1 + num2}`))(2, 3); // Sum => 5