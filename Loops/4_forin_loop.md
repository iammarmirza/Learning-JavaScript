# forin loop
We can use `forin` loop for executing the array
``` javascript
const myObject = {
    NFS : "Need for Speed",
    GTA : "Grand Theft Auto",
    GOW : "God of War"
}

for (const key in myObject) { 
    console.log(myObject[key])
}

for (const key in myObject) {
    console.log(`${key} is the shortcut for ${myObject[key]}`)
}
```

### Let's see if we can use for in loop on arrays

``` javascript
const programming = ["JS","Ruby","Python","Java","HTML","CSS"]
for (const language in programming) {
    console.log(language)
    // Expected Output :- 0 1 2 3 4 5
}
```

* Here we can see that unlike `forof` loop the `forin` loop is returning the keys of Array
* for of loop directly returns the value of object
* And that's the major difference between these two loops

``` javascript
for (const language in programming) {
   console.log(programming[language])
}
```

### Can we use forin loop on maps?

``` javascript
const map = new Map()
map.set('IN', 'India')
map.set('USA', 'United States of America')
map.set('FR', 'France')

for (const key in map) {
    console.log(key)
} // Expected Output :- It won't work as maps are not iterable
```
***
[Video Tutorial](https://youtu.be/M0YImBHQsWU?si=vgMjLSOgDlicxbAP)
