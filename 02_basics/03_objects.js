//object singleton

//singleton object
const tinderUser = new Object()
console.log(tinderUser); //{}


//non-singleton object
const tinderUser1 = {}
console.log(tinderUser1); //{}

//we can assign values to object this way 
tinderUser.id = "123abc"
tinderUser.name = "priti"
tinderUser.email = "priti@gmail.com"

console.log(tinderUser);
// { id: '123abc', name: 'priti', email: 'priti@gmail.com' }

//we can use nested object
const regularUser = {
    email: "hrithik@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hrithik",
            lastname: "shaw"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname); //hrithik


//we can merge one or two objects
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

console.log({obj1, obj2, obj3});
/*
{
  obj1: { '1': 'a', '2': 'b' },
  obj2: { '3': 'a', '4': 'b' },
  obj3: { '5': 'a', '6': 'b' }
}
*/

//we can use assign 
const obj4 = Object.assign({}, obj1, obj2, obj3)//{} => target, obj1,obj2,obj3 => source
console.log(obj4); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

//we can also use spread operator(mostly used)
const obj5 ={...obj1, ...obj2, ...obj3 };
console.log(obj5); //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }


//array of objects
const users = [
    {
        id: 1,
        email: "p@gmail.com"
    },
    {
        id: 2,
        email: "h@gmail.com"
    },
    {
        id: 3,
        email: "n@gmail.com"
    }
]

console.log(users[1].email); //h@gmail.com

console.log(tinderUser);
//we want the keys and values of the objects separately
console.log(Object.keys(tinderUser));// [ 'id', 'name', 'email' ]
console.log(Object.values(tinderUser));// [ '123abc', 'priti', 'priti@gmail.com' ]

console.log(Object.entries(tinderUser)); // returns in array of arrays (less used)
/*
[
  [ 'id', '123abc' ],
  [ 'name', 'priti' ],
  [ 'email', 'priti@gmail.com' ]
]
*/

console.log(tinderUser.hasOwnProperty("email")); //true => gives the value true or false according to the property having it or not



//destructuring of objects
const course = {
    coursename: "Js",
    price: "999",
    courseInstructor: "priti"
}

//course.courseInstructor
//insead of these we can destructure the objects by writig it in curly braces

const {courseInstructor} = course
console.log(courseInstructor) // priti


//if we want to rename the courseInstructor to instructor
const {courseInstructor: instructor} = course
console.log(instructor) // priti


//same concept use in react(destructuring)
/* 
const navbar = ({company}) => { // insted of props.company

}
navbar(company = "priti")
*/


//json
// {
//     "name": "priti",
//     "coursename": JsUser,
//     "price" : "free"
// }

//we can also get APIs in these format too
/*
[
    {},
    {},
    {}
]
*/
