const date = new Date()
console.log(date.toISOString()) // 2023-08-21T06:17:35.547Z Shows like this
console.log(date.toDateString()) //Mon Aug 21 2023 Shows like this
console.log(date.toLocaleDateString()) //21/08/2023 Shows like this
console.log(date.toLocaleString()) //21/8/2023, 11:49:05 am Shows like this
console.log(date.toLocaleTimeString()) //11:49:43 am Shows like this
console.log(date.toJSON()) // Same output as toISOString()
console.log(date.toTimeString()) //11:53:13 GMT+0530 (India Standard Time) Shows like this
console.log(date.toUTCString()) //Mon, 21 Aug 2023 06:24:19 GMT Shows like this
console.log(date.getTimezoneOffset()) //-330 Shows like this -----> Learn more about this