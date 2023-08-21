const course = {
    courseName : "Javscript in 10 hours",
    coursePrice : "999",
    courseInstructor : "Hitesh Chaudhary"
}
// If we have to use keys in different places to print or something then we will have to use it like 
console.log(course.courseInstructor)  
// But writing course.courseInstructor everytime doesn't look good 
// for example imagine you have to print the same shit 100 times
// For this we use object destructuring
 let {courseInstructor} = course;
 // now we can just print the same output with
 console.log(courseInstructor)
 // Suppose we dont want to write course Instructor, we can also change it to some other word
 // for example
 let {courseInstructor:Instructor} = course;
 console.log(Instructor);

 /* Note :- It is just a syntactical sugar,it is totally upto you to use it or not. You can use (course.courseInstructor) 
  like that without any issues. */

  