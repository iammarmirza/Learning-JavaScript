// For Each Loop
// Most of the times we use for each loop instead of for of and for in for arrays
// forEach loop is a higher order loop
// For Each is very smart it uses a callback function so we will have to give him a function
// But we don't need to define the name of function
// In parameter's paranthesis we just have to write a suitable name what do we have to call the items of arrays it can be whatever you want
// For Each loop will go to each item by itself and perform the action on that item that you passed inside the function

const programming = ["JS","Ruby","Python","Java","HTML","CSS"]

// Syntax

programming.forEach(function (language) {
   // console.log(language)
})
 
// programming.forEach( (language) => { console.log(language)} )

// Can we pass a function in forEach?

function printWord(word){
    console.log(word);
}

// programming.forEach(printWord) // We just have to give the reference of function and not call the actual function
// The loop will handle the printing work.


// The for each loop not only works with items it also works with index andwhole array 
programming.forEach( (language, index, arr) => {
   // console.log(language, index, arr)
})

const myCoding = [
    {
        languageName : "Javascript",
        languageFileFormat : "js"
    },
    {
        languageName : "Python",
        languageFileFormat : "py"
    },
    {
        languageName : "Cascading Style Sheet",
        languageFileFormat : "css"
    }
]

myCoding.forEach( (languageInfo) =>{
    console.log(languageInfo.languageName)
})

myCoding.forEach( (languageInfo) =>{
    console.log(languageInfo.languageFileFormat)
})