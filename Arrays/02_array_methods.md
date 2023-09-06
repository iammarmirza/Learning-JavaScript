# Array Methods
`.toString()`

The `toString` method of Array instances returns a string representing the specified array and its elements.

``` javascript
const array1 = [1, 2, 'a', '1a'];

console.log(array1.toString());
// Expected output: "1,2,a,1a"
```
***
`.join()`

Joins all Array elements using a `seperator`

``` javascript
const array1 = [1, 2, 'a', '1a'];

console.log(array1.join("_"))
// Expected Output :- 1_2_a_1a
```
***
`.pop()`

Pops out the last element of an array and returns it.

``` javascript
let num = [1,2,3,4]
num.pop()
console.log(num)
// Expected Output :- 1,2,3

let newNums = [5,6,7,8]
let poppedValue = newNums.pop()
console.log(poppedValue)
// Expected Output :- 8
```
***
`.push()`

Adds an element to the end of the array and modifies it. It returns the new array length.

``` javascript
const myArray = ["Hello", "World"]
console.log(myArray.length)
// Expected Output :- 2

myArray.push("How are you?")
console.log(myArray)
// Expected Output :- ["Hello", "World", "How are you?"]

console.log(myArray.length)
// Expected Output :- 3
```
***
`.shift()`

Removes and return the first element of an array

``` javascript
let myArray = ["Hello", "World", "How are you?"]
myArray.shift()
console.log(myArray)
// Expected Output :- ["World", "How are you?"]

let newArray = [1,2,3,4,5]
let result = newArray.shift()
console.log(result)
// Expected Output :- 1
```
***
`unshift()`

Adds an element to the beginning of an array.

``` javascript 
let myArray = [50, 60, null, 10]
myArray.unshift(true)
console.log(myArray)
// Expected Output :- [true, 50, 60, null, 10]
```
***
`delete`

`delete` isn't a method. It is an operator. When we use `delete`. It doesn't affect the length of an array.

``` javascript 
let array = [1,2,3,4,5];
console.log(array.length)
// Expected Output :- 5
delete array[0];
console.log(array)
// Expected Output :- [undefined, 2, 3, 4, 5]
console.log(array.length) 
// Expected Output :- 5
```
It is recommended to use `pop()` and `shift()` over `delete`. As `delete` shows the value as undefined.
***
`.concat()`

Merges two or more arrays in a new array. Won't change the existing array.

``` javascript
let nums = [1,2,3,4]
let moreNums = [5,6,7,8]

const numArray = nums.concat(moreNums)
console.log(numArray)
// Expected Output :- [1,2,3,4,5,6,7,8]
```
***
`.sort()`

Helps to sort alphabetically. Modifies original array.

``` javascript 
const array = [1,2,22,3,39,4]
array.sort()
console.log(array)
// Expected Output :- [1, 2, 22, 3, 39, 4]
```
But we can see that its only sorting on the base of 1st number and not actual value.

To sort in ascending and descending form in the right manner we use `compare function`

``` javascript
const array = [1,2,22,3,39,4]
let compare = (smallerNum, biggerNum) =>{
    return smallerNum - biggerNum
}
array.sort(compare)
console.log(array)
// Expected Output :- [1, 2, 3, 4, 22, 39]
```
* If a comes before b alphabetically, it returns a negative number.
* If a comes after b, it returns a positive number.
* If a and b are equal, it returns 0.
***
`.splice()`

To add and delete items in an array
* Syntax: array.splice(startIndex, deleteCount, item1, item2, ...)
* startIndex: The index at which to start making changes.
* deleteCount: The number of elements to remove (optional).
* item1, item2, ... : New elements to be added
* `.splice()` modifies the source array.
It returns the deleted values.

``` javascript 
const myArray = [1, 2, 3, true, false, undefined, "No"]
const deletedValues = myArray.splice(1, 2, null, 56, 98)
console.log(myArray)
// Expected Output :- [1, null, 56, 98, true, false, undefined, "No"]
console.log(deletedvalues)
// Expected Output :- [2, 3]
```
As we can see starting from 1st index, 2 items got deleted, the new ones got added and then the exisiting array items are continued.
***
`.slice()`

The `.slice()` method is used to create a new array that contains a portion of the original array without modifying the original array.

* Syntax: array.slice(startIndex, endIndex)
* startIndex: The index from which to start slicing (inclusive).
* endIndex: The index at which to stop slicing (exclusive).
* Returns: A new array containing the sliced elements.

``` javascript
const originalArray = [1, 2, 3, 4, 5];
const slicedArray = originalArray.slice(1, 4);

console.log(originalArray); // [1, 2, 3, 4, 5] (Original array remains unchanged)
console.log(slicedArray);   // [2, 3, 4] (New array with sliced elements)
```

