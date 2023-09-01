# Truthy & Falsy
_Sometimes Javascript assumes that a value is true then it is called as truthy and vice versa_

**Some examples of Falsy Values**
* false
* 0 --> zero
* -0 --> Negative zero
* 0n --> BigInt
* "" --> empty string
* null
* undefined
* NaN

_Apart from these values all are truthy values_

**Some truthy values are confusing and their examples are :-**
* "0" --> If we write 0 in a string then it is a truthy value but if we write it as a number then it is falsy
* "false" --> This is a truthy value because we have written this inside of a string
* " " --> If we give a space inside a string then it is also a truthy value, but if it's empty then it is falsy
* [] --> Empty array
* {} --> Empty Object
* function(){} --> An empty function declared like this is also a truthy value
***

_If we want to find out whether an array is empty we can do it like_

``` javascript
let myArray = []
if(myArray.length === 0){
    console.log("Array is empty")
}
```

_If we want to find out whether an object is empty we can do it like_
``` javascript
let myObject = {}
if(Object.keys(myObject).length === 0){ 
    console.log("Your object is empty")
}
// Object.keys(myObject) will turn an object into an Array 
```
***
[Video Tutorial](https://youtu.be/0P_YvC6Gg0c?si=zudEgujq8auKhTiA)
