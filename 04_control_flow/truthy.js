// truthy values

const userEmail = "priti@ai.com" //means always there will be true
//if the userEmail is a empty string => it will hold falsy values
//if the userEmail is a empty array => it will hold truthy values



if(userEmail)
{
    console.log("Got user email");
}
else{
    console.log("Don't have user email");
}

//falsy values
//false, 0, -0, BigInt 0n, "", null, undefined, NaN

//suprised truthy value
//"0", 'false', " ", [], {}, function(){} (empty function)



//checking empty array
const userEmail1 = 0;

if(userEmail1.length === 0)
{
    console.log("Array is empty");
}


//checking empty object
const emptyObj = {}
// Object.keys(emptyObj) => it has changed the object to array
if(Object.keys(emptyObj).length === 0)
{
    console.log("object is empty");
}


// (false == 0) => true
// (false == '') => true
// (0 == '') => true

//Nullish Coalescing Opeator (??) : null undefined

let val1, val2, val3, val4;
val1 = 5 ?? 10;
val2 = null ?? 10; //this is for if there is no value like 10 over here then val2 will be considered as null value
val3 = undefined ?? 15;
val4 = null ?? 10 ?? 20; // if there are two or more values after null then only 1st value will be assigned

console.log(`val1: ${val1} && val2: ${val2} && val3: ${val3} && val4: ${val4}`); // val1: 5 && val2: 10 && val3: 15 && val4: 10



//Terniary operator

//syntax :-
//condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80") //more than 80




