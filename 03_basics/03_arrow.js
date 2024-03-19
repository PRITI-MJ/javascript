const user = {
    username: "priti",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`); // this refers to the current object

        console.log(this);
    }
}
 
//here this in node js this refers to {} (empty object)
//but in browser this refers to window object
console.log(this);{}


user.welcomeMessage(); //priti, welcome to website
/*
    {
        username: 'priti',
        price: 999,
        welcomeMessage: [Function: welcomeMessage]
    }
*/

user.username = "hrithik"

user.welcomeMessage() //hrithik, welcome to website
/*
    {
        username: 'hrithik',
        price: 999,
        welcomeMessage: [Function: welcomeMessage]
    }
*/

const chai = function (){
    let username = "priti"
    console.log(this.username); // undefined
    //it means "this" keyword can only be accessed within object but not in function
}
chai()

//arrow function
 const chai1 = () => {
    let username = "priti"
    console.log(this); // {}
    //it means "this" keyword can only be accessed within object but not in function
}
chai1() //undefined


//explicit return
const addTwo = (num1, num2) => {
    return num1 + num2;
}
console.log(addTwo(3, 4)); //7


//implicit return  => one line statement without using return keyword
const addTwoNum = (num1, num2) => num1 + num2;
console.log(addTwo(5, 4)); //9


//arrow function to return object
const addTwo2 = (num1, num2) => ({sername: "priti"})
console.log(addTwo2(5,6)); //{ username: 'priti' }


