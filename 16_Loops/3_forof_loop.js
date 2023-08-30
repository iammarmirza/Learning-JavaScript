// For of
// These loops are array specific loops.
// ["","",""]
// [{},{},{}]

const arr = [1,2,3,4,5]
// Iterators can be anything not only object but strings and arrays are also iterable
for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello World!"
for (const greet of greetings){
    if ( greet === " "){
        continue
    }
    // console.log(`Each Char is ${greet}`);
}

// How to use for of loop on Map

const map = new Map()
map.set('IN', 'India')
map.set('USA', 'United States of America')
map.set('FR', 'France')

// console.log(map)

// We can't run for of loop on map like 
for (const key of map) {
    // console.log(key)
}

// It will print the whole thing in different arrays
// If we want to print the values independently there is a different syntax

for (const [key, value] of map) {
    console.log(`${key} :- ${value}`) // Both of them works the same
    console.log(key, " :- ", value)
}

// But we can't use for of loop on object with the same syntax

const myObject = {
    game1 : "NFS",
    game2 : "GTA",
    game3 : "God of War"
}

// Not Working
/* for (const key of myObject) {
    console.log(key)
} */ 

// Not Working
/* for (const [key, value] of myObject) {
    console.log(key, value)
} */

// In the end we can't use for of loop on object
