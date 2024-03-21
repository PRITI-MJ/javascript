//"for each" loop

const coding = ["js","ruby","java","python","cpp"];

coding.forEach(function (item){
    console.log(item);
})
//output:-
/*
js
ruby
java
python
cpp
*/


//using arrow function
coding.forEach((item) =>
{
    console.log(item);
})


//print using another function
function printMe(item){
    console.log(item);
}

coding.forEach(printMe);





//in for each loop not only we can print the elements , we can also print the index and array as well
coding.forEach((item, index, arr) => {
    console.log(item, index, arr);
})
//output:-
/*
js 0 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
ruby 1 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
java 2 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
python 3 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
cpp 4 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
*/

//array of objects
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js",
    },
    {
        languageName: "java",
        languageFileName: "java",
    },
    {
        languageName: "python",
        languageFileName: "py",
    }
]

myCoding.forEach((item) => {
    console.log(item.languageName);
})
/*
javascript
java
python
*/

