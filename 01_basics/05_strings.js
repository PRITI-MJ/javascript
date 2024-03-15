const name = "priti"
const repoCount = 50

//console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String('pritiMj')
console.log(gameName); //[String: 'pritiMj'] //string act as an object
console.log(gameName[0]); //p
console.log(gameName.__proto__); //{}
console.log(gameName.length); //7
console.log(gameName.toUpperCase());//PRITIMJ //it does not change the original string
console.log(gameName.charAt(2)); //i  //it gives the character at index 2
console.log(gameName.indexOf('i')) //2 //it will provide the index of only first character

const newString = gameName.substring(1, 4); //[1, 4) => 1 is the starting index and 4 is the ending index but it will not be included
console.log(newString);//rit

const anotherString = gameName.slice(-5, 4); //first element takes the number of characters from back (As it is in negative), and the second one take from which index we are calculating but it is not included
console.log(anotherString);//it

//trim removes the space lines
const newStringOne = "      priti    "
console.log(newStringOne);//      priti    
console.log(newStringOne.trim());//priti

const url = "https://priti.com/priti%20mukherjee"
console.log(url.replace('%20', '-')) //https://priti.com/priti-mukherjee

console.log(url.includes('priti')) //true => it gives values in true and false


const gameName1 = "priti-mukherjee-650";
console.log(gameName1.split('-')); //[ 'priti', 'mukherjee', '650' ] //converting into objects based on '-'
