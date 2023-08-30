// We can use for in loop for executingg the array
const myObject = {
    NFS : "Need for Speed",
    GTA : "Grand Theft Auto",
    GOW : "God of War"
}

for (const key in myObject) { 
    // console.log(myObject[key])
}

for (const key in myObject) {
    // console.log(`${key} is the shortcut for ${myObject[key]}`)
}

// Let's see if we can use for in loop on arrays

const programming = ["JS","Ruby","Python","Java","HTML","CSS"]
for (const language in programming) {
    // console.log(language)
}

// Here we can see that unlike for of loop the for in loop is returning the keys of Array
// for of loop directly returns the value of object
// And that's the major difference between these two loops

for (const language in programming) {
   // console.log(programming[language])
}

// Can we use forin loop on maps???

const map = new Map()
map.set('IN', 'India')
map.set('USA', 'United States of America')
map.set('FR', 'France')

for (const key in map) {
    console.log(key)
} // won't work as maps are not iterable