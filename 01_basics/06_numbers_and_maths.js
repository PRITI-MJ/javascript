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



