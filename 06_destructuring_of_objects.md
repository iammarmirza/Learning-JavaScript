# Destructuring of Objects
``` javascript
const course = {
    courseName : "Javscript in 10 hours",
    coursePrice : "999",
    courseInstructor : "Hitesh Chaudhary"
}
```
_If we have to use keys in different places to print or something then we will have to use it like_
``` javascript
console.log(course.courseInstructor)  
```
* But writing course.courseInstructor everytime doesn't look good 
* For example imagine you have to print the same shit 100 times

_For this we use object destructuring_
``` javascript
 let {courseInstructor} = course;
 ```
 _Now we can just print the same output with_
 ``` javascript
 console.log(courseInstructor)
 ```
 _Suppose we dont want to write course Instructor, we can also change it to some other word_

 For example
 ``` javascript
 let {courseInstructor:Instructor} = course;
 console.log(Instructor);
 ```

 `Note :-` It is just a syntactical sugar,it is totally upto you to use it or not. 
 
 You can use `(course.courseInstructor)` like that without any issues. 