console.log(2 > 1) //true
console.log(2 >= 1) //true
console.log(2 < 1) //false
console.log(2 == 1) //false
console.log(2 != 1)//true


//here js is converting string to number
console.log("2" > 1)//true
console.log("02" > 1)//true

console.log(null > 0) //false
console.log(null == 0) //false
console.log(null >= 0) //true

console.log(undefined == 0)// false
console.log(undefined > 0)// false
console.log(undefined < 0)// false

//=== 
//it will not only check the values as well as datatypes
console.log("2" === 2) //false
console.log("2" === "2") //true
