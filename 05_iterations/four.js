const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: "ruby",
    swift: "swift by apple"
}

//"for in" loop
for(const key in myObject)
{
    console.log(`${key} shortcut is for ${myObject[key]}`);
}
//output:-
/*
js shortcut is for javascript
cpp shortcut is for c++
rb shortcut is for ruby
swift shortcut is for swift by apple
*/




const programming = ["js","rb","py","java","cpp"]

for(const key in programming)
{
    console.log(key); 
}
//output:-
/*
0
1
2
3
4
*/
//in "for in" loop, the keys represents the indexes of the array
//in "for of" loop, the keys represents the elements of the array



//2) For-in loop in maps:-
// Since maps are not iteratable hence we cannot iterate on maps using for in loop
// Though it wont give an error but it won't print any value either

const map = new Map();
map.set("IN", "India");
map.set("USA", "United State of America");
map.set("FR", "France");

for(const key in map)
{
    console.log(`${key}th index --> ${map[key]}`);
}

console.log("Won't print any values,since maps are not iteratable.");