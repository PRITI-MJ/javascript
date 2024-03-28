class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
    
}

class Teacher extends User{
    constructor(username, email, password){
        super(username) //doing the work of call and this
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`)
    }
}

const chai = new Teacher("chai", "chai@teacher.com", "123");
chai.addCourse(); //A new course was added by chai


const masalaChai = new User("masalacHAI")
masalaChai.logMe() //USERNAME is masalacHAI
console.log(chai === User); //false
console.log(chai instanceof User); //true