/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/


let result = "5" - 2;
let message = String(result); // Explicitly converting the result to a string to ensure correct concatenation
console.log("The result is: " + message);

let isValid = Number("false");
if (isValid) {
    console.log((isValid));
}

let age = "25";
age = Boolean(age); // Implicitly converting the string to a boolean for the if condition
if (age) {
    console.log("Age is valid: " + age);
}

let totalAge = age + 5; // Implicitly converting the boolean to a number (true becomes 1) and adding 5
console.log("Total Age: " + totalAge);
let y = "10"; 
y= Number(y); // Explicitly converting the string to a number to perform arithmetic operations
console.log("The value of y is: " + y);
let x = "JavaScript";
if (x === "JavaScript") {
    x = true;
} else {
    x = false;
}
x = Boolean(x); // Explicitly converting the string to a boolean to check if it's truthy
console.log("The value of x is: " + x);