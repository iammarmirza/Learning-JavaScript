# Escape Sequence Characters

Sometimes we have to write something in quotation marks.\
If we are using single quote inside a string made by double quotes and vice versa then it is possible. But sometimes we have to use double quotes in a string created by double quotes then we can do it by using `Escape Sequence Characters` without confusing Javascript.

To escape we use backslash `\` and then write the quotes, the quote next to backslash will be ignored as string ending. Escape sequence characters does not affect string length.\
Escape sequence character's length will be counted as one only

``` javascript
let sentence = "\"Fear God and you will have no cause to fear any one.\""
console.log(sentence) // Expected Output :- "Fear God and you will have no cause to fear any one."
```

`\n` New Line\
`\r` Carriage Return\
`\t` New Tab