//Primitive => call by value => changes are not reflected in the original value, it gets reflected in the copied value


//7 types:- String, Number, Boolean, null, undefined, Symbol, BigInt

//Is javascript Dynamic type Language or Static type Language?
//javascript ==> a dynamically typed language as we don't have to assign datatype to the variable

const score = 100 //javascript
//const score : number = 100 //typescipt 
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null //typeof => object
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId) //false

const bigNumber = 35444444645664444444n
console.log(typeof bigNumber); //bigint


//Reference(Non primitive)

//Array, Objects, Functions

//array
const heros = ["shaktiman", "naagraj","doga"];
console.log(typeof heros); //object


//object
let myObj = {
    name: "ptiti",
    age: 20,
}
console.log(typeof myObj);//object

//function
const myFunction = function(){
    console.log("hello world");
}
console.log(typeof myFunction);//function(object function)

