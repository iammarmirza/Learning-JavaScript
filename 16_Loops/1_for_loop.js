// for loop
for(let i = 0; i<=10; i++){ 
    const element = i; 
    //  console.log(element) 
 }
 // let i = 0 initializes the loop and then it never gets touched
 // then the loop see the second statement if it's true then it enters into loop body to execute the code
 // After executing the code then it sees the 3rd statement and it increments or decrements the value
 // then it again checks 2nd statement if its true or not and this cycle goes on until 2nd statement becomes false
 
 for(let i = 0; i<=10; i++){ 
    const element = i;
    console.log(element)
    if(element === 5){
        console.log("5 is the best number")
    }  
 }

 const myArray = ["Flash", "Batman", "Superman"]
 for (let index = 0; index < myArray.length; index++) { 
    console.log(myArray[index]);
 }

 // Break and continue
 // We can break the control flow of loop using break

 //Break
 for(let index = 0; index <=20; index++) {
   if (index == 5){
      console.log("5 is detected")
      break
   }
console.log(`Value of Index is ${index}`)
  } 

// Continue
// Works a lil similar to break but it just skip the control flow for one loop and then thw whole loop continues as it is
for(let index = 0; index <=20; index++) {
   if (index == 5){
      console.log("5 is detected")
      continue
   }
console.log(`Value of Index is ${index}`)
  } 
