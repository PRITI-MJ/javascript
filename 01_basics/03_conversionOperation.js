let score = 33
console.log(typeof score); //number

let score1 = "33"
console.log(typeof score1);// string

let valueInNumber = Number(score1)
console.log(typeof valueInNumber);//number
console.log(valueInNumber);// 33

let score2 = "33abc"
let valueInNumber1 = Number(score2) //as we know abc is not a number it is giving value as NaN
console.log(typeof valueInNumber1);//number
console.log(valueInNumber1); //NaN

let score3 = null
let valueInNumber2 = Number(score3)
console.log(valueInNumber2); //0

let score4 = undefined
let valueInNumber3 = Number(score4)
console.log(valueInNumber3); //NaN


let score5 = true
let valueInNumber4 = Number(score5)
console.log(valueInNumber4); //1


//"33" => 33
//"33abc" => NaN
// true => 1; false => 0

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

//"7" => true
//"" => false
//0 => false
//null => false
//undefined => false
//1 => true
//"priti" => true


let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);//33
console.log(typeof stringNumber);// string

//33 => 33
// "33abc" => 33abc
//null => null
//undefined => undefined



