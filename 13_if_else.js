// If and else are conditional statement when we want a code to execute differently on two different conditions

/* if(condition){

}*/
// if condition inside paranthesis will be true the the code will execute
// If there are only two conditions then you can also use else
/* else{

}*/
// Only one of them will execute

// you can also use if elseif elseif else for more than two conditions

// You can also add more than on condition in if or else using logical operators
// && --> code will execute if both the statements are true
// || --> code will execute if only one of the statements are true


// Nullish Coalescing Operator (??) : works on 2 keywords null and undefined
// Sometimes we call database like firebase and all then it's possible that it gives us 2 values so at that time we use this
// For Example 
let val1;
val1 = 5 ?? 10
console.log(val1)
// Now we will question if it only consider 1st value why to use ??
// But look at this case and you will get it

let val2;
val2 = null ?? 15
console.log(val2)

// Note :- Nullish Coalescing Operator and ternary operator are two different things

// Ternary Operator 
// condition ? true : false
// example
const iceCreamPrice = 100;
iceCreamPrice <= 50? console.log("It's cheap") : console.log("It's Expensive")