// Immediately invoked function expressions
// IIFE are often unnamed functions because they are immediately invoked
// When you are writing 2 IIFE's next to each other don't forget to put a semicolon after the first one
// because IIFE doesn't know where to stop
// IIFE are very simple to write 

(function name(){
    console.log("Ammar");
})(); // This is called named iife

(()=>{
    console.log("error 404")
})();

// You can also insert and use parameters inside of IIFE
((fullName)=>{
    console.log(`My full name is ${fullName}`)
})("Ammar Mirza");

((num1, num2)=>{
    console.log(num1 + num2)
})(5, 8);