//here javascript consider 400 as a number
const score = 400
console.log(score)//400


//here we are defining 100 as a number
const balance = new Number(100);
console.log(balance);//[Number: 100]

//if we change the number to string then not only the number becomes string also the property of string comes to the number
console.log(balance.toString());//100
console.log(typeof balance);//object => string
console.log(balance.toString().length); //3

//if we want to fix the numbers after decimal to a fixed number we can use "toFixed" property
console.log(balance.toFixed(2)); //100.00


//toPrecision gives priority to the number before decimal
const otherNumber = 123.8966;
console.log(otherNumber.toPrecision(3)); //124
console.log(otherNumber.toPrecision(4)); //123.9
console.log(otherNumber.toPrecision(2));//1.2e+2


const hundreds = 1000000
console.log(hundreds.toLocaleString())//1,000,000 //it gives the value in US standards
console.log(hundreds.toLocaleString('en-IN')) //10,00,000 //it gives the value in INDIAN standards


// ++++++++++++++++++++ Maths +++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4)); //4
console.log(Math.round(4.6)); //5
console.log(Math.ceil(4.2)); //5
console.log(Math.floor(4.9)); //4
console.log(Math.min(4, 3, 6, 8)); //3
console.log(Math.max(4, 3, 6, 8)); //8

console.log(Math.random()); //it always gives values from 0(inclusive) to 1(exclusive) //0.7486472392961403
console.log((Math.random()*10) + 1); //to get the minimum value of 1 //10.680401219991637
console.log(Math.floor(Math.random()*10) + 1); //to get the integer values from 1 to 10

const min = 10
const max = 20

//to get the values between 10 to 20(both inclusive)
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
//here (max-min+1) gives the range and (+min) decides the starting point

