//singleton
//literals used => then no singleton is being created(object literals)
//constructors => singleton is being created(object.create)


//object literals 

//using symbol in object as key
const mySym = Symbol("key1")

const JsUser = {
    name: "priti",
    "full Name" : "Priti Mukherjee",
    [mySym]: "mykey1",
    age: 25,
    location: "Jaipur",
    email: "priti@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}


//how to access values in object
console.log(JsUser.email); 
//not a good practice // priti@google.com

console.log(JsUser["email"]); 
//email should be in inverted commas because js treat keys as a string //priti@google.com

//console.log(JsUser.full Name) //can't be accessed this way
console.log(JsUser["full Name"]); //can be accessed only this way

//accessing symbols from object
console.log(JsUser[mySym]); //mykey1
console.log(typeof mySym); //symbol


//change the values of object
JsUser.email = "priti@microsoft.com"
console.log(JsUser.email);//priti@microsoft.com

//if we don't want to do any changes on the object we can freeze the values of the objects
//Object.freeze(JsUser);

JsUser.greeting = function(){
    console.log("hello js user");
}

console.log(JsUser.greeting());//hello js user
console.log(JsUser.greeting);//[Function (anonymous)] => function reference

JsUser.greetingTwo = function(){
    console.log(`hello js user, ${this.name}`); //string interpolation
}

console.log(JsUser.greetingTwo());//hello js user, priti