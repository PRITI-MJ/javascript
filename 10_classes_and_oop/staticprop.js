class User {
    constructor(username) {
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

const Priti = new User("Priti")
//console.log(Priti.createId()); //if we add static to a function that function will not be accessible

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
iphone.logMe(); //Username: iphone
//console.log(iphone.createId())

