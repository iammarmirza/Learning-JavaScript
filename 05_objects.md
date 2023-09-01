# Objects
_When you make an object with a constructor it is a singleton object it means it is one of a kind_
``` javascript
// This is Constructor method and this is how singleton objects are created  

Object.create 
const user = new Object()
```
_When we declare objects as literals then it is not singleton_
``` javascript
// Normal way of declaring object and it is not singleton 

const JsUser = {
    name : "Ammar",
    age : 21,
    email : "ammarmirza@microsoft.com",
} 
```

_There are 2 ways of accessing an object_
``` javascript
// 1st method
console.log(JsUser.name)
// 2nd method
console.log(JsUser["name"]) 
// When we use the method above, we replace dot with the brackets and we have to write key names in strings 
```
_An Object automatically assumes keys as strings, so as long as we are not specifically defining it as string we can use dot method_

``` javascript
// But if we define keys as strings like

const JsUser = {
    "name" : "Ammar",
    "age" : 21,
    "email" : "ammarmirza@microsoft.com",
}

// then there is no way we can access these keys using dot method we will have to use square brackets method
```
***
### Using symbol in an object
``` javascript
// Suppose we have to use a symbol as a key in an object like

const mySym = Symbol("key");

const JsUser = {
    name : "Ammar",
    mySym : "key1"
    age : 21,
    email : "ammarmirza@microsoft.com",
}
```
_Maybe it can show the same output but it won't be used as a symbol, it would show the type string.\
Correct syntax of using symbol as key in object_\
`[mySym] : "key1"`

_Similarly when we have to use symbol we can only access it through square brackets method and not dot method_
***
### Overwriting the values of Objects
``` javascript
// We can overwrite the values of objects like 
JsUser.email = "ammarmirza@chatgpt.com"
// But if we want that no one can change the value of our object then we can freeze it like
Object.freeze(JsUser)
```

`Note:-` _We can create as many objects inside objects as we want_
***
### Merging the objects
``` javascript
// If we have to merge two objects we can't do it like
const obj1 = {
    1 : "a",
    2 : "b"
}
const obj2 = {
    3 : "a",
    4 : "b"
}

const obj3 = {obj1, obj2} 
// It won't merge objects it will just put these 2 objects in a bigger object

// We can join objects with 
Object.assign(target, source)
Object.assign(obj1, obj2) 
```
* _In this the obj2 will get merged in obj1_
* _An empty braces is recommended to use at the start so that the empty object is target and all source get stored there._

``` javascript 
// For example
const obj3 = Object.assign({},obj1,obj2)
console.log(obj3)
```
_But...but...but... We will mostly use spread operators to merge them like arrays_

``` javascript
const obj3 = {...obj1, ...obj2}
console.log(obj3)
```
***
### Extracting keys and values from object
``` javascript
// We can put keys and values in array and make use of it in different places
console.log(Object.keys(JsUser))
console.log(Object.values(JsUser))
console.log(Object.entries(JsUser)) 
// This put each key value pairs in seperate arrays
```
***
### hasOwnProperty()
_Sometimes we have to check that if an object contains a key or not then we can use_ `hasOwnProperty()`

For example
``` javascript
console.log(JsUser.hasOwnProperty("email")) // It returns boolean value
```
***
[Video Tutoral Part 1](https://youtu.be/vVYOHmqQDCU?si=nzXNYOOUu5Gh_0BL)\
[Video Tutoral Part 2](https://youtu.be/4lb2pXWWXJI?si=iW6qHnzpZA4u4_X1)