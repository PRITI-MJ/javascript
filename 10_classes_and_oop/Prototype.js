let myName = "Priti   "; //if we add space after name



console.log(myName.length); //8
//console.log(myName.truelength);


let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function() {
        console.log(`Spidy power is ${this.spiderman}`);
    }

}

//injecting a method into the Object bia prototype => inderectly this method now can be implemented inside the function, array and string
Object.prototype.priti = function(){
    console.log(`Priti is present in all objects`);
}

heroPower.priti(); //Priti is present in all objects
myHeros.priti(); //Priti is present in all objects

Array.prototype.heyPriti = function(){
    console.log(`Priti says hello`);
}

//heroPower.heyPriti() //Error: heroPower.heyPriti is not a function
myHeros.heyPriti();  //Priti says hello
//so heyPriti is only be accessible by Arrays and not Objects or functions or strings

//Inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport //TASupport is being refrenced by TeachingSupport
}

//Old Syntax
Teacher.__proto__ = User //Teacher is accessing the properties of the User


//modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher) //TeachingSupport is accessing the properties of the user


let anotherUsername = "chaiAurCode    "

String.prototype.trueLength = (function() {
    console.log(`${this}`); //chaiAurCode
    console.log(`True length is: ${this.trim().length}`)
})

anotherUsername.trueLength(); //True length is: 11
 "Priti  ".trueLength() //True length is: 5
 "Hrithik".trueLength() //True length is: 7