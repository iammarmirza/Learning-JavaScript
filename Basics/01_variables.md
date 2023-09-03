# Variables

Variables are containers in which we can store things. A variable is very powerful in Javascript and it can hold almost anything.

## var

Before ECMA6 there was only one way to define a variable, which was using `var` keyword.

``` javascript
var number = 20;
console.log(number) 
```

But `var` comes with certain restrictions.

* `var` is global scoped.
* It's value can be changed anywhere in the code.
* Hence there are a lot of chances of errors in future if someone defines a variable with same name and different values.

``` javascript
var value = 50;
console.log(value); // Expected Output :- 50

if(true){ 
    var value = true;
} 

console.log(value); // Expected Output :- true
```
As we saw here the value defined through `var` in `if` should only remained inside of scope but it also changed outside the scope. Which is obviously not good.
***

## let & const

To avoid the difficulties by the limitations of `var` keyword, ECMA6 came with `let` and `const`

* `let` & `const` are block scoped.
* Hence their values can't be leaked.
* Unlike `var`, `let` & `const` can be initialized only once.
* `let` & `const` are almost same, the major difference is that the we can overwrite the value of a variable defined by `let` unlike `const`
* And one more difference is that we can initialize a variable without a value using `let` unlike `const`

``` javascript
let number;
number = 50;
console.log(number) // Expected Output :- 50

if(true){
    let number = 60;
    console.log(number) // Excpected Output :- 60
}

console.log(number) // Expected Output :- 50
```
 The value of `let` inside `if` scoped remained inside only and didn't get leaked and that's why `let` & `const` are better than `var`
``` javascript
const number; // It will throw an error here
number = 50;
console.log(number)
```

