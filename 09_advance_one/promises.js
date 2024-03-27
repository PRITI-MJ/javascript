//fetch('https://something.com').then().catch().finally()

//response => .then()
//error => .catch()
//always be executed => .finally


//creating promises
const promiseOne = new Promise((resolve, reject) => {
    //Do an async task, DB calls, cryptography, network
    setTimeout(() => {
        console.log('Async task is completed');
        resolve()
    }, 1000)
})

//consumption of promise
promiseOne.then(() => {
    console.log("Promise consumed");
})


new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Async task 2");
        resolve()
    }, 1000)
}).then(() => {
    console.log("Async 2 resolved");
})



const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({username: "chai", email: "chai@example.com"})
    },)
})

promiseThree.then((user) => {
    console.log(user);
    //{ username: 'chai', email: 'chai@example.com' }
})


const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true
        if(!error){
            resolve({username: "Priti", password: "123"})
        }else{
            reject('ERROR: Something went wrong')
        }
    },1000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username); //Priti
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log("The promise is resolved or rejected");
})


const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true
        if(!error){
            resolve({username: "Javascript", password: "123"})
        }else{
            reject('ERROR: JS went wrong')
        }
    },1000)
})

async function consumePromisefive() {
    try{
    const response = await promiseFive
    console.log(response);
    }
    catch(error) {
        console.log(error);
    }
}
consumePromisefive();




//fetching using async function
async function getAllUsers() {
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data  = await response.json(); //we are using await because to convert the string to json it takes time
        console.log(data);
    }
    catch(error){
        console.log(error);
    }
}

getAllUsers();




//fetching using Promise
fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json;
})
.then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error);
})
//here we don't have to use await because all the then catch will be performed one by one
//error will only be catched in the catch block if it cannot process the request


//fetch queue => Priority queue/ microtask queue(highest priority)

