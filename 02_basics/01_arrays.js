//javascript arrays are resizable and contain a mix of different datatypes
//arrays are sharing same reference point => means create shallow copy


const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4) //it will create the array automatically
console.log(myArr2[0]); //1



//array methods
myArr.push(6)
myArr.push(7)
console.log(myArr); 
/*[
    0, 1, 2, 3,
    4, 5, 6, 7
  ]
*/

myArr.pop();
console.log(myArr);
/*[
    0, 1, 2, 3,
    4, 5, 6
  ]
*/

myArr.unshift(9); //it enters the element at the first
console.log(myArr);
/*[
    9, 0, 1, 2,
    3, 4, 5, 6
]
*/

myArr.shift();
console.log(myArr);
/*[
    0, 1, 2, 3,
    4, 5, 6
]
*/

console.log(myArr.includes(9)); //false
console.log(myArr.indexOf(3)); //3

//arr.join binds the elements of the array and also convert it into string
const newArr = myArr.join()
console.log(newArr); //0,1,2,3,4,5,6
console.log(typeof newArr); //string

//slice , splice

console.log("OriginalArray= ", myArr);

const myn1 = myArr.slice(1,3);
console.log("sliceArray= ",myn1);
console.log("array after applying slice= ", myArr);

const myn2 = myArr.splice(1,3);
console.log("spliceArray= ",myn2);
console.log("array after applying splice= ", myArr);


/*

OriginalArray=  [
  0, 1, 2, 3,
  4, 5, 6
]


sliceArray=  [ 1, 2 ]
array after applying slice=  [
  0, 1, 2, 3,
  4, 5, 6
]


spliceArray=  [ 1, 2, 3 ]
array after applying splice=  [ 0, 4, 5, 6 ]

*/

//so we can see 2 difference between slice and splice

//slice extract the array element between the given range but doesn't include the last range
//splice extract the array element between the given range but it include the last range unlike splice

//slice doesn't change the original array
//splice make changes in the original array => it removes the spliced elements from the original array



