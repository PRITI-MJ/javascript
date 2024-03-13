const accountId = 14453 //const means we can't change the value
// accountId = 2 //not allowed

/*
for storing variables we use "var" and "let"

Prefer not to use var
because of issue in block scope and functional scope
*/
let accountEmail = "priti@gmail.com"
accountEmail = "pm@gmail.com"

var accountPassword = "12345"
accountPassword = "323232"

//we can also store value without using var and let, but not a good practice
accountCity = "jaipur"
accountCity = "Bengaluru"

let accountState;// if we don't assign any value then it gives the value as undefined

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);




/*

output
┌─────────┬────────────────┐
│ (index) │ Values         │
├─────────┼────────────────┤
│ 0       │ 14453          │
│ 1       │ 'pm@gmail.com' │
│ 2       │ '323232'       │
│ 3       │ 'Bengaluru'    │
│ 4       │ undefined      │
└─────────┴────────────────┘
*/