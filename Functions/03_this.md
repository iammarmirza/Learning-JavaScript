# This
`This` _is a keyword in javascript which always refers to the current context or object_

_Since_ `This` _refers to an object you can't use it in function and expect the same output_

``` javascript
const user = {
    name : "Ammar",
    age : 18,
    welcomeMessage : function(){
        console.log(this.name)
    }  
}
user.welcomeMessage()
```

* Since this is inside an object it referred to property inside object otherwise it refers to the global object
* Which is global in node and Window object in chrome

`console.log(this)`

``` javascript 
let animal = function(){
    let animalName = "lion"
    console.log(this)
}
animal()

// Showing empty braces
// Refers to window object in chrome console
```
***
[Video Tutorial](https://youtu.be/9ksqBa8_txM?si=8qYgHrLujyABa4Rr)

