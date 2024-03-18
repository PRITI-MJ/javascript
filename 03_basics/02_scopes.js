let a = 10
const b = 20
var c = 30

console.log(a);// 10
console.log(b);// 20
console.log(c);// 30


//global scope
var d = 300
let k = 100;

//block scope
if(true){
    let e = 10;
    const f = 30;
    d = 30;
    let k = 90;
    console.log("Inner: ", d) //Inner: 30
}

//console.log(e); //not defined means does not come outside the scope
//console.log(f); //not defined
console.log(d); //30 => here the number of d is also changed and even can be printed outside the scope
/*
    that is why var keyword should be avoided while declaring the variables
*/

console.log(k); //100 => global scope value is taken because let keyword is valid within the scope only


for(let i = 0; i < Array.length; i++)
{
    const element = Array[i];
}


//inspect one global scope and global scope created by node are different


function one(){
    const username = "priti"

    function two(){
        const website = "youtube"
        console.log(username); //priti
    }
    // console.log(website); // it will throw error because website was declared inside two , hence cannot be accessed


    //if we comment out two() then nothing will be printed
    two();
}
one();


if(true){
    const username = "priti"
    if(username === "priti")
    {
        const website = " youtube"
        console.log(username + website); //priti youtube
    }

}

// ++++++++++++++++ interesting +++++++++++++++++++



// different syntax of functions

console.log(addone(5)) //6 => here we can access it before declaration
function addone(num){
    return num + 1;
}


// addTwo(5); => this will throw error because someone has declared function as in the below function
const addTwo = function(num){
    return num + 2;
}

