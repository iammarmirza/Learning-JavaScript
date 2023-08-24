// Abbreviations 
// GEC --> Global Execution Context
// FEC --> Function Execution Context
// MCP --> Memory Creation Phase
// EP --> Execution Phase

// Javascript execution context refers to how a piece of code in javascript gets executed

// There are mainly 2 contexts
// Global execution context
// Function execution context
// there is one more context we will see when we will learn Mongoose, // EVAL execution context

// Global execution context is inseperable whether its browser, node, deno or bun
// GEC takes your javascript code into {} and stores it into "this" variable.

// Function Execution stage has 2 phases
// Memory Creation Phase && Execution Phase
// Memory Creation phase cycle will always run
// First of all when you define a variable it creates a memory or that variable and enters it value as undefined
// Then in Execution Phase the allocated memory spaces gets the actual value instead of undefined

let val1 = 5 // Firstly in MCP val1 will be undefined and then in execution phase 5 will get stored in val1
let val2 = 8 // Same logic as above

function addTwoNum (num1, num2){ 
    let total = num1 + num2
    return total;
} // since it is not a variable, it is a function hence instead of undefined the definition of function will get stored inside of addTwoNum()
// The function will then create it's own sandbox whenever it is called, in that sandbox both phases will repeat
// After the execution of function this temporary sandbox gets deleted.

// Note :- Always look at when the function is defined not at where it's called to understand context

addTwoNum(val1, val2) // MCP --> val1 = undefined, val2 = undefined, total = undefined
// EP --> val1 = 5, val2 = 8, total = 13 // Since we are returning the total it gets transferred to GEC
addTwoNum(10, 6) // MCP --> num1 = undefined, num2 = undefined, total = undefined
// EP --> num1 = 10, num2 = 6, total = 16 (total gets returned to GEC)