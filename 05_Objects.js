// When you make an object with a constructor it is a singleton object it means it is one of a kind
//constructor method and this is how singleton objects are created 
Object.create 
const user = new Object()
// When we declare objects as literals then it is not singleton
// Normal way of declaring object and it is not singleton 
const JsUser = {
    name : "Ammar",
    age : 21,
    email : "ammarmirza@microsoft.com",
} 

// There are 2 ways of accessing an object
// 1st method
console.log(JsUser.name)
// 2nd method
console.log(JsUser["name"]) 
// When we use the method above, we replace dot with the brackets and we have to write key names in strings 
// An Object automatically assumes keys as strings, so as long as we are not specifically defining it as string we can use dot method
// But if we define keys as strings like 

/* const JsUser = {
    "name" : "Ammar",
    "age" : 21,
    "email" : "ammarmirza@microsoft.com",
}
then there is no way we can access these keys using dot method we will have to use square brackets method*/

// Suppose we have to use a symbol as a key in an object like
const mySym = Symbol("key");
/* const JsUser = {
    name : "Ammar",
    mySym : "key1"
    age : 21,
    email : "ammarmirza@microsoft.com",
} */
// It can show the same output but it won't be used as a symbol, it would show the type string
// Syntax of using symbol as key in object 
// [mySym] : "key1"

// Similarly when we have to use symbol we can only access it through square brackets method and not dot method

//We can overwrite the values of objects like 
JsUser.email = "ammarmirza@chatgpt.com"
// But if we want that no one can change the value of our object then we can freeze it like
Object.freeze(JsUser)


// We can create as many objects inside objects as we want
// If we have to merge two objects we can't do it like
const obj1 = {
    1 : "a",
    2 : "b"
}
const obj2 = {
    3 : "a",
    4 : "b"
}

// const obj3 = {obj1, obj2} // It won't merge objects it will just put these 2 objects in a bigger object
// We can join objects with 
// Object.assign(target, source)
// Object.assign(obj1, obj2) In this the obj2 will get merged in obj1
// An empty braces is recommended to use at the start so that the empty object is target and all source get stored there.
// For example
// const obj3 = Object.assign({},obj1,obj2)
// console.log(obj3)

// But...but...but... We will mostly use spread operators to merge them like arrays

const obj3 = {...obj1, ...obj2}
// console.log(obj3)


// We can put keys and values in array and make use of it in different places 
console.log(Object.keys(JsUser))
console.log(Object.values(JsUser))
console.log(Object.entries(JsUser)) // This put key each value pairs in seperate arrays

// Sometimes we have to check that if an object contains a key or not then we can sue hasOwnProperty()
// For example
console.log(JsUser.hasOwnProperty("email")) // It returns boolean value