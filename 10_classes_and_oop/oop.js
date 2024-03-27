const user = {
   username: "Priti",
   loginCount: 8,
   signedIn: true,


   getUserDetails: function(){
    //console.log("Got user details from database");
    //console.log(`Username: ${username}`) => this will throw error because it doesnot know from which username it is asking about
    console.log(`Username: ${this.username}`) //Username: Priti
    console.log(this); //current context
    /*
    {
        username: 'Priti',
        loginCount: 8,
        signedIn: true,
        getUserDetails: [Function: getUserDetails]
    }
    */
   }
}

console.log(this); //{} => empty object
console.log(user.username);
console.log(user.getUserDetails());


//constructor function
//we have use this before
// const promiseOne = new Promise()
// const date = new Date()


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    return this //this function will implicitely return the value where "return this" is mentioned or not
}

const userOne = User("Priti", 12, true)
const userTwo = User("chaiaurcode", 11, false)
console.log(userOne);
console.log(userTwo); 
//here userTwo will override the value of userOne

//To avoid this, we use "new" keyword
const userOne1 = new User("Priti", 12, true)
const userTwo1 = new User("chaiaurcode", 11, false)
console.log(userOne1); //User { username: 'Priti', loginCount: 12, isLoggedIn: true }
console.log(userTwo1); //User { username: 'chaiaurcode', loginCount: 11, isLoggedIn: false }

//so constructor function gives new instances for different values


//new keyword
//1st one empty object (instance) is being created
//2nd a constructor function is being called by new keyword => all the arguments will be injected inside the this keyword
// then we got the returned value inside the function

console.log(userOne.contructor); //basically contructor is a reference of itself
