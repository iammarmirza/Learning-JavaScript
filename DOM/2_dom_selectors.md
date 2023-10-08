# DOM selectors

`getElementById()`

`getElementById()` is a JavaScript method used to retrieve a reference to an HTML element with a specific `id` attribute value from a web page.

You can also use a dot and extract other values from the retreived HTML tag.

And this is how DOM Manipulation is done.

Suppose this is the html document
``` html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>DOM Manipulation</title>
    </head>
    <body class="bg-black">
        <h1 id="title" class="first-heading">DOM Manipulation</h1>
        <p>Lorem ipsum odor iter.</p>
    </body>
</html>
```
Then we will use `getElementById()` like this to access the HTML element.

``` javascript
document.getElementById("title")
// Expected Output :- <h1 id="title" class="first-heading">DOM Manipulation</h1>
```

We can use `.className` like this to find out the class of selected element.
``` javascript
document.getElementById("title").className
// Expected Output :- first-heading
```

We can use `.getAttribute()` like this to get access to any attribute of the selected element.
``` javascript
document.getElementById("title").getAttribute("id")
// Expected Output :- title

document.getElementById("title").getAttribute("class")
// Expected Output :- first-heading
```

We can use `.style` like this to style the element.
``` javascript
document.getElementById("title").style.color = "green"
// Expected Output :- The color of the text will turn green
```

Similarly we can gain access to various values like this using dot for e.g:- `innerText`, `innerHTML`, `textContent`
***
We can also store these various values in variables like 
``` javascript 
const myElement = document.getElementById("title").className

console.log(myElement)
// Expected Output :- first-heading
```
***
`setAttribute()`

We can use `setAttribute()` to set more attributes.
`setAttribute()` uses two parameters inside of paranthesis. The first value is the type of attribute like `id` and `class` and the second value is the name of the attribute you want to give to the element.

`Note :-` `setAttribute()` over-rides the existing attribute.

``` javascript
document.getElementById("title").setAttribute("class", "heading")

// Now the className of the element is "heading" instead of "first-heading"

// To avoid the existing attribute to be override by the new element. You must also include the existing attribute with the new one like this 

document.getElementById("title").setAttribute("class", "heading first-heading")

// Now the class attribute of the element is "heading first-heading"
```
***

### Difference between `innerText`, `innerHTML` and `textContent`

Now we will see the difference between `innerText`, `innerHTML`, `textContent`. For that we will take a random javascript code to understand things

``` html
<html>
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <p id="paragraph" class="firstParagraph">Learning Javascript</p>
</body>
</html>
```
Suppose this is the HTML code and you have to extract text node from the `<p>` tag.

``` javascript
const myPara = document.getElementById('paragraph')
// Expected Output :- myPara =  <p id="paragraph" class="firstParagraph">Learning Javascript</p>

myPara.innerText
// Expected Output :- Learning Javascript

myPara.innerHTML
// Expected Output :- Learning Javascript

myPara.textContent
// Expected Output :- Learning Javascript
```
Now, all three of them are giving same output so is there really a difference or they all are just same?

We will understand the difference by tweaking our html code a little

``` html
<html>
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <p id="paragraph" class="firstParagraph">Learning Javascript<span style="display: none;"> from Youtube</span></p>
</body>
</html>
```

``` javascript
const myPara = document.getElementById('paragraph')
// Expected Output :- myPara =  <p id="paragraph" class="firstParagraph">Learning Javascript<span style="display: none;"> from Youtube</span></p>

myPara.innerText
// Expected Output :- Learning Javascript

myPara.innerHTML
// Expected Output :- Learning Javascript<span style="display: none;"> from Youtube</span>

myPara.textContent
// Expected Output :- Learning Javascript from Youtube
```

Now you can see the difference, 
* `innerHTML` supports the HTML tags inside the elements while `innerText` and `textContent` don't
* `innerText` only shows the visible text and does not show any text hidden by CSS properties.
* `textContent` showss all the text, even if it's hidden by some CSS properties.

All of them have their different use cases and you can use any of them as per your convenience.
***

`querySelector()`

`querySelector()` selects the first item with the given `id`, `class` and `tagName`

``` html
<html>
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <h1>Learning Javascript</h1>
    <ul>
        <li>One</li>
        <li>Two</li>
        <li>Three</li>
    </ul>
    <input type="password" id="passwordBox">
</body>
</html>
```
``` javascript
const myul = document.querySelector('ul')

const turnBlue = myul.querySelector('li')

turnBlue.style.backgroundColor = 'blue'

// The background of the first list item 'One' will turn blue

document.querySelector('input[type="password"]')

// Expected Output :- <input type="password" id="passwordBox">
```

Good thing about `querySelector()` is that you can use all the CSS selectors in that.
For e.g :-
``` javascript 
document.querySelector('title')
document.querySelector('#title')
document.querySelector('.title')
document.querySelector('p:first-child')
```
***
`querySelectorAll()`

`querySelectorAll()` is similar to `querySelector()` the major difference is that while `querySelector()` only selects the first element with a specific `id`, `class` or `tagName`.`querySelectorAll()` selects all the element matching the criteria and returns them in a `NodeList`

`Note :-` `NodeList` and `HTMLCollection` are not `Arrays`. Some of their properties may match with `Arrays` but they are different. Hence you can't use `maps` on `NodeList` and `HTMLCollection`

And since it returns `NodeList`, you can't style it like `querySelector()` 

``` javascript 
const tempLiList = document.querySelectorAll('li')

tempLiList.style.color = "green"
// It will throw an error

tempLiList[0].style.color = "green"
// Correct Syntax
```
In the last example there were multiple elements wrapped in `NodeList`.\
Can we use `querySelector()` styling syntax if there is only one element in `NodeList`?\
The answer is, No we can't. Look at this example
``` javascript
const myH1 = document.querySelectorAll('h1')

myH1.style.color = "green"
// It will throw an error

myH1[0].style.color = "green"
// Correct Syntax
```
***
We should try to use `forEach()` on `NodeList` since it's not an `Array` and doesn't have functionalities like `map`. If we want to use `map` on `NodeList`, we will have to convert it into an `Array` first.

Example of `forEach()` on `NodeList`
``` javascript
const tempLiList = document.querySelectorAll('li')
tempLiList.forEach(function (l){
    l.style.backgroundColor = "green"
    // It will change all of the list items background color to green
})
```
***
`getElementsByClassName()`

`getElementsByClassName()` works a lil similar as `getElementById()` but it returns the elements in a `HTMLCollection`.

`HTMLCollection` doesn't have any looping properties like `map`, `forEach()` etc. Hence we have to convert i t into an `Array` to do the same.

You can convert a `HTMLCollection` into an `Array` by using `Array.from()`

``` html
<html>
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <h1>Learning Javascript</h1>
    <ul>
        <li class="list-item">One</li>
        <li class="list-item">Two</li>
        <li class="list-item">Three</li>
        <li class="list-item">Four</li>
    </ul>
    <input type="password" id="passwordBox">
</body>
</html>
```
``` javascript
const tempList = document.getElementsByClassName('list-item')
// tempList now holds a HTMLCollection consisting all the list items

const myConvertedArray = Array.from(tempList)
// Now myConvertedArray holds all the list items like tempList but in the form of an Array.
// Now we can use any type of loop on it

myConvertedArray.forEach(function(li){
    li.style.color = "orange"
    // All the list-items color will turn orange
})
```
[Video Tutorial](https://youtu.be/Ab6K57WjWTE?si=l8DpiC8nm_wZ5txL)