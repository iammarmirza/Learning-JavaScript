# Functions
``` javascript
// This is how you write a function
function anyName(parameters){
     // code to be executed
} 
// This is how you call a function
anyName();
```
* A function will never work unless you call it.

_Now there can be many nestings of functions like you can write functios inside of functions_

``` javascript
function bigSample(){
    const flavour1 = "chocolate"
    function smallSample(){
        const flavour2 = "butterscotch"
        console.log(`Icecream is ${flavour1} flavoured and the cake is ${flavour2} flavoured.`)
    } // Child can access the variables of its parent.
    // console.log(`Icecream is ${flavour1} flavoured and the cake is ${flavour2} flavoured.`)
    // the above code won't work as the parent can't access his child's variables.
    smallSample();
}
bigSample();
```
***
_If you are writing a function like this then you can use it in the lines before it is written_

``` javascript
console.log(addTwoNumbers(3,5))

function addTwoNumbers(num1, num2){
    return num1 + num2
}

addTwoNumbers();
```

_But if you are writing a function and storing it in a variable you will have to use it in the lines below the function is written_

``` javascript
const result = function addThreeNumbers(num1, num2, num3){
    return num1 + num2 + num3;
}
console.log(result(1, 8, 9));
```
***
[Video Tutorial](https://youtu.be/Bn56WahG_t0?si=FXsW-2q_72AG_bJd)
