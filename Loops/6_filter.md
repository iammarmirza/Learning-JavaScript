# Filter
* `forEach` has a limitation that it doesn't return the value, so we can't store and use the value afterwards
* `filter` helps to filter out certain values matching the given conditions and those true conditions are returned where as false are not.
* `filter` uses call back function


``` javascript 
const myNums = [1,2,3,4,5,6,7,8,9,10]
const newNums = myNums.filter( (num)=> num > 4)

console.log(newNums) // Expected Output :- [ 5, 6, 7, 8, 9, 10 ]
```

If we want to do the same thing with `forEach` we can do it like

``` javascript 
const newNums = [];

myNums.forEach( (num) =>{
    if (num > 4){
        newNums.push(num)
    }
})

console.log(newNums) // Expected Output :- [ 5, 6, 7, 8, 9, 10 ]
```
 ``` javascript
 const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => bk.genre === 'History')
  console.log(userBooks)
/* Expected Output :- [
  {
    title: 'Book Three',
    genre: 'History',
    publish: 1999,
    edition: 2007
  },
  {
    title: 'Book Seven',
    genre: 'History',
    publish: 1986,
    edition: 1996
  }
] */

  userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})

  console.log(userBooks); 
 /* Expected Output [
  {
    title: 'Book Three',
    genre: 'History',
    publish: 1999,
    edition: 2007
  }
]*/
 ```
 ***
 [Video Tutorial](https://youtu.be/9MfwYoWKKVE?si=JT3w2AyWbRXytEpe)