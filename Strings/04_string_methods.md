# String Methods

`.length`

It's a property and not a method. It is used to find out the length of the string.

``` javascript
let myString = "Ammar"
console.log(myString.length); // Expected Output :- 5
```
***

`.toLowerCase()`

It is a function and it makes all characters lowercase.

``` javascript
let myString = "AMMAR"
console.log(myString.toLowerCase()); // Expected Output :- ammar
```
***
`.toUpperCase()`

It is a function and it makes all characters Uppercase.

``` javascript
let myString = "ammar"
console.log(myString.toUpperCase()); // Expected Output :- AMMAR
```
***

`.slice()`

We can slice strings using slice. 
* We have to pass 2 arguments inside paranthesis to slice.
* `slice()` uses Index of a string as a criteria to slice.
* If we use `randomVariable.slice(2,4)` then it will start with the index 2, end to 3 and ignore 4. This is called `slice()` with both arguments.
* But if we won't give it an ending point then it will slice the whole string from the point of 1st argument. This is called `slice()` with only one argument

``` javascript
let myString = "Transformers"
console.log(myString.slice(2,6)) // Expected Output :- ansf
console.log(myString.slice(4)) // Expected Output :- sformers
```
***
`.replace()`

If we want to replace a specific part of a string then we can use `.replace()`
* We have to use it like randomVariable.replace("the part of string to be replaced" , "to be replaced with")
* As Javascript is case sensitive we will have to use exact words as string inside paranthesis. For e.g :- If the string contains "AMMAR" and we have to replace "AMM" with "ZAF" we can't write it like randomVariable.replace("Amm", "ZAF")

``` javascript
let myString = "Ammar"
console.log(myString.replace("Amm", "Zaf")) // Expected Output :- Zafar
```
***
`.concat()`

It is used to merge two more strings.\
Syntax :- `randomVariable.concat("string","string")`\
We can concatinate as much strings as we want

``` javascript
let myString = "Sam"
console.log(myString.concat(" is a good boy")) // Expected Output :- Sam is a good boy
```
***
`.charAt()`

To access individual characters on the basis of index.

``` javascript
let myString = "Car"
console.log(myString.charAt(1)) // Expected Output :- a
```


