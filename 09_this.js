// "This" is a keyword in javascript which always refers to the current context/object
// Since This refers to an object you can't use it in function and expect the same output

const user = {
    name : "Ammar",
    age : 18,
    welcomeMessage : function(){
        console.log(this.name)
    }  
}
user.welcomeMessage()
// since this is inside an object it referred to property inside object otherwise it refers to the global object
// which is global in node and window in chrome

console.log(this) // Showing empty braces // refers to window object in chrome console

let animal = function(){
    let animalName = "lion"
    console.log(this)
}
animal()

