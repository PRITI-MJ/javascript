class User {
    constructor(email, password){
        this._email = email;
        this._password = password
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}priti`
    }

    set password(value){
        this._password = value
    }
}

const priti = new User("p@priti.ai", "123")
console.group(priti.password); //123priti
console.group(priti.email); //  P@PRITI.AI

