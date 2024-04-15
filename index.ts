//136
//Use `console.log()` to debug and track the value of a variable inside a loop.
for (let i = 1; i <= 5; i ++){
    console.log (`Iteraction ${i}, i value:. `)
}

//137:- Implement a try-catch block to handle potential errors in a block of code.
try {
    throw new Error ("...!something went wrong!...");

}
catch (error){
    console.log (error.message);
}

//138 :-Describe how to use breakpoints in browser developer tools to debug JavaScript code.
console.log("...Before breakpoint...");
console.log(
    "This line has a breakpoint set on it is in the browser's developer tools!"
)
console.log (
    "...After Breakpoint..."
)