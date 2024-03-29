//defining getter setter using properties
//function based syntax

function User(email, password){
    this._email = email;
    this._password = password

    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase()
        },

        set: function(value){
            this._email = value
        }
    })

    //Object.defineProperty(this, 'email')
}

const chai = new User("p@priti.ai", "123")
console.log(chai.email); //  P@PRITI.AI