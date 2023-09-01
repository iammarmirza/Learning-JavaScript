# If Else
_`if` and `else` are conditional statements when we want a code to execute differently on two different conditions_

``` javascript
if(condition){
    // code to be executed
}
```
* If condition inside paranthesis will be true the the code will get executed
* If there are two conditions then you can also use `else`

``` javascript
else{
     // code to be executed
}
```
_Only one of them will execute_

* You can also use if `elseif` for more than two conditions

* You can also add more than on condition in `if` or `else` using `logical operators`
    1. && --> code will execute if both the statements are true
    2. || --> code will execute if only one of the statements are true


## Nullish Coalescing Operator (??) 
It works on 2 keywords `null` and `undefined`

* Sometimes we call database like firebase and all then it's possible that it gives us 2 values so at that time we use this.

For Example
``` javascript 
let val1;
val1 = 5 ?? 10
console.log(val1)
// Expected Output 5
```

Now we will question if it only consider 1st value why to use ??, but look at this case and you will get it

``` javascript 
let val2;
val2 = null ?? 15
console.log(val2)
// Expected Output 15
```

`Note :-` Nullish Coalescing Operator and Ternary operator are two different things

## Ternary Operator 
_condition ? true : false_

Syntax Example
```javascript
const iceCreamPrice = 100;
iceCreamPrice <= 50? console.log("It's cheap") : console.log("It's Expensive")
// Expected Output :- "It's Expensive"
```
***
[Video Tutorial](https://youtu.be/0P_YvC6Gg0c?si=4AK4uyWWZzYsZfBs)
