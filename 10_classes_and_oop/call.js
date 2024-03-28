function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called")
}

function createUser(username, email, password){
    SetUsername.call(this, username) //it will call the reference of the object(means whatever things assigned in the SetUsername will be performed) 

    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123");
console.log(chai);
 //createUser { email: 'chai@fb.com', password: '123' } => without using call and this

 console.log(chai); //createUser { username: 'chai', email: 'chai@fb.com', password: '123' } => after using call and this