// when you write a function like this, It is called as an arrow function
hello = () => {
    // this is called explicitly defined arrow function and writing return is compulsory if you are using curly braces
    return "Hello World"
};

console.log(hello())

// If our line of code can fit in one line then there is no need to use curly braces and explicitly defining arrow function

addTwoNumbers = (num1, num2) => (num1 + num2) // This is implicitly define arrow function and we didn't have to use return keyword just because we are using paranthesis
console.log(addTwoNumbers(8,9))

