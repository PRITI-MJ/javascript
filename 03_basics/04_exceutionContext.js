//javascript execution context

// 3 types
//1 -> Global Execution Context
//2 -> Function Execution Context
//3 -> Eval Execution Context


//how does javascript code get executed

/*
    javascript code runs in two phases

    1st phase -> memory creation phase ( Creation Phase )
    2nd phase -> execution phase

    In memory creation, the variables and functions is being located to a particular address (not executed)
    In execution phase, the operations is being executed
    
*/


//Examples:-

let val1 = 10
let val2 = 5
function addNum(num1, num2)
{
    let total = num1 + num2;
    return total;
}
let result1 = addNum(val1, val2)
let result2 = addNum(10, 2)


/*

1. Global Execution Context -> "This"

2.Memory Execution Phase
val1 -> defined
val2 -> defined
addnum -> function defination
result1 -> undefined
result2 -> undefined


3.Execution Phase
val1 -> 10
val2 -> 5

addNum func for result1=> another execution context is being created

It contains => new variable enviroment + execution thread

1.Memory Phase for function addNum
val1 -> undefined
val2 -> undefined
total -> undefined


2. Execution Context
val1 -> 10
val2 -> 5
total -> 15

now this is being returned to the global execution context

After returning the new executional context which was created for addNum function is being deleted

result1 => 15

now same will repeat for result 2
*/

