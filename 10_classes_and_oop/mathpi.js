const descripter = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(descripter);
/*
{
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false
}
It means the value cannot be changed
*/

//if we want to change the value of Math.PI, then we can't do that
/*
console.log(Math.PI);//3.141592653589793
Math.PI = 5
console.log(Math.PI);//3.141592653589793
*/

//creating new object
// const mynewObject = Object.create(null)

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai ni bani");
    }
}
console.log(Object.getOwnPropertyDescriptor(chai, "name"));
/*
{
  value: 'ginger chai',
  writable: true,
  enumerable: true,
  configurable: true
}
//It means the value can be changed
*/

//now we are changing the properties of the objects
// Object.defineProperty(chai, 'name', {
//     writable: false,
//     enumerable: false
// })

// console.log(Object.getOwnPropertyDescriptor(chai, "name"));
/*
{
  value: 'ginger chai',
  writable: false,
  enumerable: false,
  configurable: true
}
*/

//if we want to iterate in the object using loop
for(let [key, value] of Object.entries(chai)){
    if(typeof value !== 'function') {
         console.log(`${key} : ${value}`);
    }
}
/*
name : ginger chai
price : 250
isAvailable : true
*/

//if we do enumerable as false, then we will not able to iterate in that peoperty
//then the output will be:-
/*
price : 250
isAvailable : true
*/
