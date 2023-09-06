# MAP

* Map is an unordered collection of `key-value` pairs. Both keys and values can be of any datatype.
* To retreive a value you can use the corresponding ket
* Maps are iterable they can be used with a `for of` loop
* Maps works almost similar as an object.

## Difference between Maps and Objects
* Objects are unordered whereas Maps are ordered.
* Keys in Objects can only be a string and a symbol, whereas in Maps it can be of any type.
* An object is a prototype and may contain a few default keys which may collide with your own keys if you're not careful enough. A map on the other hand does not contain any keys by default.
* Objects are not iterables whereas Maps are iterables
* Maps maintain insertion order
* The number of items in an object must be determined manually where as it is readily available with the size property in a map.
* Apart from storing data, you can attach functionality to an object whereas maps are restricted just storing data.

When we have to create a new array by performing some operations on each array elements.

`Note :-` Both `map()` and `forEach()` have 3 arguments (value, index, array)

`map()` uses call back function

``` javascript 
const array = [1,2,3,4,5,6]
const newArray = array.map ((number)=> {
    return number + 10;
})
console.log(newArray)
// Expected Output :- [11, 12, 13, 14, 15, 16]
```
We can also use `map` on `map` like 

``` javascript
const array = [1,2,3,4,5,6]
const newArray = array.map ((number)=> {
    return number + 10;
}).map((number)=>{
    return number + 5;
})
console.log(newArray)
// Expected Output :- [16, 17, 18, 19, 20, 21]
```
This is called chaining 

## Map using constructor

``` javascript 
const myMap = new Map([['a', 1], ['b', 2]])

for (const key of myMap.keys()){
    console.log(key)
    // Expected Output :- "a" "b"
}

for (const value of myMap.values()){
    console.log(value)
    // Expected Output :- 1 2
}

for (const [key, value] of myMap){
    console.log(`The key is ${key} and the value is ${value}`)
    // Expected Output :- "The key is a and the value is 1"
    // "The key is b and the value is 2"
}
```
***
`map.set()`

To insert key value pairs in Map.

``` javascript
const myMap = new Map([['a', 1], ['b', 2]])
myMap.set('c', 3)

for (const key of myMap.keys()){
    console.log(key)
    // Expected Output :- "a" "b" "c"
}
```
***
`map.delete()`

To delete the key value pairs in Map.
``` javascript
const myMap = new Map([['a', 1], ['b', 2], ['c', 3]])
myMap.delete('c')

for (const key of myMap.keys()){
    console.log(key)
    // Expected Output :- "a" "b"
}
```
***
`map.has()`

To check if a map has ceratin key, it returns boolean values

``` javascript
const myMap = new Map([['a', 1], ['b', 2], ['c', 3]])

console.log(myMap.has('c'))
// Expected Output :- true
```
***
`map.size`

To check how many elements are in Map.
``` javascript
const myMap = new Map([['a', 1], ['b', 2], ['c', 3]])

console.log(myMap.size)
///Expected Output :- 3
```
***
`map.clear()`

To delete all the key-value pairs from Map
``` javascript
const myMap = new Map([['a', 1], ['b', 2], ['c', 3]])

myMap.clear()

for (const key of myMap.keys()){
    console.log(key)
    // Expected Output :- 
}
```
***
`map.get()`

`map.get()` is a method used to retrieve the value associated with a specific key from a Map object.

``` javascript
const myMap = new Map();

myMap.set("apple", 3);
myMap.set("banana", 5);
myMap.set("cherry", 2);

// Using map.get() to retrieve values
const appleCount = myMap.get("apple");  // Returns 3
const orangeCount = myMap.get("orange");  // Returns undefined (key not found)

// Handling missing keys
if (orangeCount === undefined) {
  console.log("Orange count not found in the Map.");
}
```