// seperate the words from string
// loop over words array
// Break word into first letter and rest of the letters, apply uppercase to first letter and join both
// join the result into sentence

const string = "johnny is a nice kid"
const arr = string.split(" ")
     .map((word)=>{
       return word.charAt(0).toUpperCase() +   
      word.slice(1)
     })
     .join(" ")
console.log(arr)