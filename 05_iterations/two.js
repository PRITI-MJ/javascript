//while loop

//syntax
//while(condition){}


let index = 0
while(index <= 10)
{
    console.log(`value of index is ${index}`);
    index = index + 2;
}
/*
value of index is 0
value of index is 2
value of index is 4
value of index is 6
value of index is 8
value of index is 10
*/

let myArray = ["flash", "batman", "superman"]

let arr = 0;
while(arr < myArray.length)
{
        console.log(`Value is ${myArray[arr]}`);
        arr = arr + 1;
}
/*
Value is flash
Value is batman
Value is superman
*/



//do while loop(atleast one time the loop will execute irespective of the fact that the condition satisfies or not)
let score = 11;
do{
    console.log(`Score is ${score}`);
    score++;
}while(score <= 10); 
//output:-
//Score is 11

