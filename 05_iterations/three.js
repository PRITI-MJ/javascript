// for of

// ["", "", ""]
// [{}, {}, {}]


const arr = [1, 2, 3, 4, 5]

for(const num of arr)
{
    console.log(num);
}
/*
1
2
3
4
5
*/


const greetings = "Hello"
for(const greet of greetings)
{
    console.log(`Each char is ${greet}`);
}
//output
/*
Each char is H
Each char is e
Each char is l
Each char is l
Each char is o
*/


//Maps => no duplicate values only unique values
const map = new Map()
map.set('IN',"India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN',"India")

console.log(map);
/*
Map(3) {
  'IN' => 'India',
  'USA' => 'United States of America',
  'Fr' => 'France'
}
*/

//using for of loop
for(const key of map)
{
    console.log(key)
}
/*
[ 'IN', 'India' ]
[ 'USA', 'United States of America' ]
[ 'Fr', 'France' ]
*/

for(const [key, value] of map)
{
    console.log(key, ':-', value);
}
/*
IN :- India
USA :- United States of America
Fr :- France
*/

//if we want to iterate in object using "for of" loop
const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for(const [key, value] of myObject)
// {
//     console.log(key, ':-', value);
// }
// TypeError: myObject is not iterable
//So, we cannot able to iterate on object using "for of" loop


