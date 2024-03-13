"use strict"; // treat all JS code as newer version

//alert(3 + 3) // we are using node.js , not browser

let name = "priit"
let age = 18
let isLoggedIn = false
let state; //undefined, means no value is assigned
let state2 = null; //a null value is assigned

// number => 2 to power of 53
// bigInt => to store a large number like in stock market
// string => ""
// boolean => true / false
// null => standalone value
// undefined => no value is assigned
//symbol => unique
//object
//undefined => type = undefined
//null => type = object



console.table([typeof "priti", typeof age, typeof isLoggedIn, typeof state, typeof state2])

/*
┌─────────┬─────────────┐
│ (index) │ Values      │
├─────────┼─────────────┤
│ 0       │ 'string'    │
│ 1       │ 'number'    │
│ 2       │ 'boolean'   │
│ 3       │ 'undefined' │
│ 4       │ 'object'    │
└─────────┴─────────────┘
*/