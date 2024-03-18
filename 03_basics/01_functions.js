function sayMyName() {
    console.log("P");
    console.log("R");
    console.log("I");
    console.log("T");
    console.log("I");
}

sayMyName();
/*
P
R
I
T
I
*/

//in js we don't have to use datatypes
function addTwoNumbers(number1, number2) //number1 and number2 called as parameters
{
    console.log(number1 + number2);
}
addTwoNumbers(3, 4); //7   //here 3 and 4 are called as arguments
addTwoNumbers(3, "4"); //34
addTwoNumbers(3, "a"); //3a
addTwoNumbers(3, null); //34

const result = addTwoNumbers(3, 5);
console.log("Result:", result); //undefined as addTwoNumbers function are not returning anything


function addTwoNumbers2(number1, number2)
{
    let result = number1 + number2;
    return result;
}
const result1 = addTwoNumbers2(3, 5);
console.log("Result1: ", result1); //Result1:  8


function loginUserMessage(username) { 
    if(username === undefined) //(!undefined)
    {
        console.log("please enter a username");
        return;
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("priti")); //priti just logged in
//if we don't pass any arguments then the result will be "undefined just logged in"

console.log(loginUserMessage()); //please enter a username


//if we don't want any undefined value then we assign a value to the username initially
function loginUserMessage2(username = "hrithik") { 
    if(username === undefined) //(!undefined)
    {
        console.log("please enter a username");
        return;
    }
    return `${username} just logged in`
}

console.log(loginUserMessage2("priti")); //priti just logged in
//if we don't pass any arguments then the result will be "undefined just logged in"

console.log(loginUserMessage2()); //hrithik just logged in




function calculateCartPrice(num1)
{
    return num1;
}
console.log(calculateCartPrice(200, 300, 400)); //200


//if we want to print all the elements of the arguments, we use "rest" operator or "spread" operator
function calculateCartPrice1(...num1)
{
    return num1;
}
console.log(calculateCartPrice1(200, 300, 400)); // [ 200, 300, 400 ]


function calculateCartPrice3(val1, val2, ...num1)
{
    return num1; //val1 = 200, val2 = 300 , num1 =[400, 2000]
}
console.log(calculateCartPrice3(200, 300, 400, 2000)); // [ 400, 2000 ]


const user = {
    username: "priti",
    price: 500
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

handleObject(user); //Username is priti and price is 500

handleObject({
    username: "hrithik",
    price: 399
}) //Username is hrithik and price is 399



//same with array
const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1];
}

console.log(returnSecondValue(myNewArray)); //400
console.log(returnSecondValue([1200, 300, 400, 600])); //300
