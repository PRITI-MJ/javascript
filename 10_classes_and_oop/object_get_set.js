const User = {
    _email: 'p@pm.com',
    _password: "abc",

    get email(){
        return this._email.toUpperCase()
    },

    set email(Value){
        this._email = Value
    }
}

//rather than using new , we can use factory function
const tea = Object.create(User)
console.log(tea.email); //P@PM.COM
console.log(tea._email); //p@pm.com