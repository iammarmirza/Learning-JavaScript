# Reduce Problem
``` javascript
let arr = ["hi","my","name","is","Ammar"]
function joinStrings(acc, word){
  console.log(acc)
  return acc + " " + word;
}
let newarr = arr.reduce(joinStrings, "");
console.log(newarr)
```

# Map problem
``` javascript
const numbermap = {
    1 : "One",
    2 : "two",
    3 : "Three"
  }
  let num = [1,2,3,4,5,6,7,8,9,10]
  const result = num.map((value)=>{
    // return numbermap[value] || "Number not found"
    /* return numbermap[value]
        ? numbermap[value] 
         : "Number not found" */
    if(numbermap[value]) {
      return numbermap[value];
    }
    return "Number not found"
  })
  result.forEach((string)=>{
    console.log(string)
  })
  ```

***
**Broke down the task in smaller ones for better understanding**

Seperate the words from string \
Loop over words array \
Break word into first letter and rest of the letters, apply uppercase to first letter and join both \
Join the result into sentence

``` javascript
const string = "johnny is a nice kid"
const arr = string.split(" ")
     .map((word)=>{
       return word.charAt(0).toUpperCase() +   
      word.slice(1)
     })
     .join(" ")
console.log(arr)
```

  # FizzBuzz Problem
  
  ``` javascript
  function fizzBuzz(array){
    array.forEach((number) => {
      if(number%3===0 && number%5===0){
         console.log("FizzBuzz");
        return;
       }
      if(number%5 === 0) {
        console.log("Buzz");
        return;
      }
      if(number%3 === 0){
        console.log("Fizz");
        return;
      }
        console.log(number)
    });
  }
  const numbers= [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 18, 21, 22, 25];
  fizzBuzz(numbers);
  ```