# For Each Loop
* Most of the times we use `forEach` loop instead of `forof` and `forin` for arrays
* `forEach` loop is a higher order loop
* `forEach` is very smart it uses a callback function so we will have to give it a function
* But we don't need to define the name of function
* In parameter's paranthesis we just have to write a suitable name what do we have to call the items of arrays it can be whatever you want
* `forEach` loop will go to each item by itself and perform the action on that item that you passed inside the function

### Syntax
``` javascript
const programming = ["JS","Ruby","Python","Java","HTML","CSS"]

// Both the console will work same
programming.forEach(function (language) {
   console.log(language)

programming.forEach( (language) => { console.log(language)} )
})
```

### Can we pass a function in forEach?

``` javascript
const programming = ["JS","Ruby","Python","Java","HTML","CSS"]

function printWord(word){
    console.log(word);

programming.forEach(printWord)
}
```

* We just have to give the reference of function and not call the actual function
* The loop will handle the printing work.


* The for each loop not only works with items it also works with index and whole array 
``` javascript
const programming = ["JS","Ruby","Python","Java","HTML","CSS"]

programming.forEach( (language, index, arr) => {
   console.log(language, index, arr)
}) 

/* Expected Output :- 
JS 0 ["JS","Ruby","Python","Java","HTML","CSS"]    
Ruby 1 ["JS","Ruby","Python","Java","HTML","CSS"]
Python 2 ["JS","Ruby","Python","Java","HTML","CSS"]
Java 3 ["JS","Ruby","Python","Java","HTML","CSS"]
HTML 4 ["JS","Ruby","Python","Java","HTML","CSS"]
CSS 5 ["JS","Ruby","Python","Java","HTML","CSS"] */

const myCoding = [
    {
        languageName : "Javascript",
        languageFileFormat : "js"
    },
    {
        languageName : "Python",
        languageFileFormat : "py"
    },
    {
        languageName : "Cascading Style Sheet",
        languageFileFormat : "css"
    }
]

myCoding.forEach( (languageInfo) =>{
    console.log(languageInfo.languageName)
}) // Expected Output :- Javascript, Python, Cascading Style Sheet

myCoding.forEach( (languageInfo) =>{
    console.log(languageInfo.languageFileFormat)
}) // Expected Output :- js, py, css

```
***
[Video Tutorial](https://youtu.be/M0YImBHQsWU?si=K72rIk2bRwfGRzaj)
