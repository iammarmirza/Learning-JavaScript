function anyName(parameters){
     // code to be executed
} // This is how you write a function

anyName(); // This is how you call a function
// A function will never work unless you call it.

// Now there can be many nestings of functions like you can write functios inside of functions

function bigSample(){
    const flavour1 = "chocolate"
    function smallSample(){
        const flavour2 = "butterscotch"
        console.log(`Icecream is ${flavour1} flavoured and the cake is ${flavour2} flavoured.`)
    } // Child can access the variables of its parent.
    // console.log(`Icecream is ${flavour1} flavoured and the cake is ${flavour2} flavoured.`)
    // the above code won't work as the parent can't access his child's variables.
    smallSample();
}
bigSample();