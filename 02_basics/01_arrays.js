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


const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros);

console.log(marvel_heros);

//[ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
//it takes the dc_heros in the array, and treat as a element in the array
console.log(marvel_heros[3]); //[ 'superman', 'flash', 'batman' ]

marvel_heros.pop();

const allHeros = marvel_heros.concat(dc_heros);
console.log(allHeros);// [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ] 
//it treats every element differently

const heros = ["shaktiman", "naagraj"]


//we can also use spread operator(mostly used)
const all_new_heros = [...marvel_heros, ...dc_heros, ...heros]; //with the help of spread operator we can add as many arrays we can
console.log(all_new_heros);

/*
[
  'thor',      'Ironman',
  'spiderman', 'superman',
  'flash',     'batman',
  'shaktiman', 'naagraj'
]
*/

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

//Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);
/*
[
  1, 2, 3, 4, 5,
  6, 7, 6, 7, 4,
  5
]
*/

const real_another_array1 = another_array.flat(1); //depth = 1(it takes only upto one level of subarray)
console.log(real_another_array1); 
//[ 1, 2, 3, 4, 5, 6, 7, 6, 7, [ 4, 5 ] ]


const real_another_array2 = another_array.flat(2); //depth = 2(it takes only upto 2nd level of subarray)
console.log(real_another_array2);
/*
[
  1, 2, 3, 4, 5,
  6, 7, 6, 7, 4,
  5
]
*/


console.log(Array.isArray("priti")) //false
console.log(Array.from("priti")); //[ 'p', 'r', 'i', 't', 'i' ]
console.log(Array.from({name: "priti"})) //[] => it returns an empty array because in case of object we need to also define the keys

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)) //it will convert this numbers into arrays
//[ 100, 200, 300 ]