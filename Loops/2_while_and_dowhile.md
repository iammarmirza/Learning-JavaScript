# While & Do while loop
## While
* In this we have to define Index out of loop first
* Inside while loop we have to write the code to be executed
* We also have to pass a condition so that a loop terminates eventually otherwise it will be infinite
* The condition doesn't necessarily have to be incremenet or decrement. It can be anything as long as it is stopping the loop at some point of time.

### **Syntax and Examples**


``` javascript
let index = 0;
while (index <= 10){
    console.log(`The Value of Index is ${index}`);
    index = index + 2;
}
```


### Using while loop on Array

``` javascript
let myArray = ["flash", "batman", "superman"];
let arr = 0;
while (arr < myArray.length) {
    console.log(`Value is ${myArray[arr]}`)
    arr++;
} 
```

## Do While Loop
* Same as while loop but it executes the code first and then checks the condition
* That's why Do while loops atleast one time no matter what
* Do while loops are used rarely

### **Syntax and Examples**

``` javascript
let score = 1
do {
    console.log(`Score is ${score}`)
    score++;
} while (score <= 10)


let runs = 11
do {
    console.log(`Runs are ${runs}`)
    runs++;
} while (runs <= 10)
```
***
[Video Tutorial](https://youtu.be/w3Q55-l47P0?si=74hLYS9pWDwSDLz2)

