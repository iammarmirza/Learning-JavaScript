# Call Stack
Call stack refers to in which order function gets called.  
Whenever you call a function it enters a stack in which global execution context is already present at bottom
* Call stack follows LIFO method --> Last in First out
// for e.g 

``` javascript
function one(){
    console.log("one")
 }

function two(){
    console.log("two")
}

function three(){
    console.log("three")
}

one(); // In this One will enter call stack execute and leave, then two and three
two();
three();
```
***
In this case `one()` will enter the call stack gets executed but won't leave as we called `two()` inside of `one()` so `two()` will get stacked on `one()` and since we called `three()` inside of `two`, `three()` will get stacked over `two` and then `three()` will get executed and leave first, then `two` will leave and at last `one` will leave and this will conclude the `one()` function's execution

_Now you know the logic_ :)
``` javascript
function one(){
    console.log("one")
    two()
 }

function two(){
    console.log("two")
    three()
}

function three(){
    console.log("three")
}
```
***
[Video tutorial](https://youtu.be/ByhtOgF6uYM?si=rVI-iBP3mdD_yxfl)
