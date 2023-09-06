# Template Literals

We can create a string using backticks ( ` ) in template literals.

Another use case is

``` javascript 
let boy1 = "Ammar"
let boy2 = "Ruhul"
```

Normally if we have to create a bigger string using these two names we will have to create a new dedicated string for the same and we can't use these strings values like 

``` javascript 
let boy1 = "Ammar"
let boy2 = "Ruhul"

let sentence = "boy1 is friend of boy2"
console.log(sentence); // Expected Output :- boy1 is friend of boy2
```
So the question is can we use those strings values?\
The answer is yes. We can.
* This is why template literals are used.
* We can inject strings using template literals
* The syntax is very simple, you have to wrap the bigger string in backticks and then wrap the string which we have to inject with `${}`
* Injecting strings like this is called `String Interpolation`

``` javascript
let boy1 = "Ammar"
let boy2 = "Ruhul"

let sentence = `${boy1} is friend of ${boy2}`
console.log(sentence); // Expected Output :- Ammar is friend of Ruhul.
```

