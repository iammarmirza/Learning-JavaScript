# IIFE
**Immediately invoked function expressions**
* IIFE are often unnamed functions because they are immediately invoked
* When you are writing 2 IIFE's next to each other don't forget to put a semicolon after the first one because IIFE doesn't know where to stop

IIFE are very simple to write

``` javascript
(()=>{
    console.log("error 404")
})();
```

### Named IIFE
``` javascript
(function name(){
    console.log("Ammar");
})();
```

### Using parameters inside of IIFE
``` javascript
((fullName)=>{
    console.log(`My full name is ${fullName}`)
})("Ammar Mirza");

((num1, num2)=>{
    console.log(num1 + num2)
})(5, 8);
```
***
[Video Tutorial](https://youtu.be/GAIbn16Iytc?si=3Z1EJvWiRwXkO-3I)