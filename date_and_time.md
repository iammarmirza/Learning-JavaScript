``` javascript
const date = new Date()
console.log(date.toISOString()) 
// Expected Output 2023-08-21T06:17:35.547Z
console.log(date.toDateString()) 
// Expected Output Mon Aug 21 2023
console.log(date.toLocaleDateString()) 
// Expected Output 21/08/2023
console.log(date.toLocaleString()) 
// Expected Output 21/8/2023, 11:49:05 am 
console.log(date.toLocaleTimeString()) 
//Expected Output 11:49:43 am 
console.log(date.toJSON()) 
// Expected Output 2023-08-21T06:17:35.547Z
console.log(date.toTimeString()) 
// Expected Output 11:53:13 GMT+0530 (India Standard Time)
console.log(date.toUTCString()) 
// Expected Output Mon, 21 Aug 2023 06:24:19 GMT
console.log(date.getTimezoneOffset()) 
//Expected Output -330 Shows like this
```
[Video Tutorial](https://youtu.be/tGLCuoumaGY?si=XYMSdZV4vet9gqIj)

_Pending Tasks :-_\
Learn more about `getTimezoneOffset()`
