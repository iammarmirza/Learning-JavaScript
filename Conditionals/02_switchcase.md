# Switch Case
Switch case is a method when you want to show different outputs at different values

* Switch cases have one characteristic that if a case is true it will execute all the cases after it 
* To avoid this we use break so that if one case is true it won't execute the other case codes

``` javascript
const a = prompt("What is your age");

switch(a){
    case 13 : console.log("Your age is 13");
    break; 
    case 14 : console.log("Your age is 14");
    break;
    case 15 : console.log("Your age is 15");
    break;
    case 16 : console.log("Your age is 16");
    break;
    default : console.log("Your age is not special") // Using a default case is highly recommended
}
```
***
[Video Tutorial](https://youtu.be/0P_YvC6Gg0c?si=zau7sb2WYvfSCLIT)
