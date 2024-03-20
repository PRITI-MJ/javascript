//if
//conditional operators :- <, >, <=, >=, ==, !=, ===(for dataType), !==


const temperature = 41;

if(temperature < 50){
    console.log("Less than 50"); //this will get executed
}
else {
    console.log("temperature greater than 50")
}


const userLoggedIn = true
const debitCard = true
if(userLoggedIn && debitCard)
{
    console.log("allow to buy course");
}