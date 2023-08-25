// Call stack refers to in which order function gets called. Whenever you call a function
// it enters a stack in which global execution context is already present at bottom
// call stack follows LIFO method --> Last in First out
// for e.g 

/* function one(){
    console.log("one")
 }

function two(){
    console.log("two")
}

function three(){
    console.log("three")
} */

one(); // In this One will enter call stack execute and leave, then two and three
two();
three();

function one(){
    console.log("one")
    two()
 }

function two(){
    console.log("two")
    three()
}

function three(){
    console.log("three")
}
// In this case One will enter call stack execute but won't leave as we called two inside one so two will get stacked
// on one and since we called three inside two three will get stacked over two and then three will execute and leave first
// then two will leave and at last one will leave and this will conclude the one() functions execution

// Now you know the logic  :)