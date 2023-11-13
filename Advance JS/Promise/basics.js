// let promise = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve('Hello I am resolved')
//     },1000)
// })

// promise.then(function(data){
//     console.log(data)
// }).catch(function(error){
//     console.log(error)
// }).finally(function(){
//     console.log('Operation ended')
// })

Promise.resolve('foo').then((string)=>{
    let newPromise = new Promise(function(resolve, reject){
        string += 'baz'
        resolve(string)
    })
}).then((data)=>{
    data += 'bear'
    console.log(data)
})