# JS Chapter Two ~ Program Structure
***
### Expressions and Statements 
- expression is a fragment of code that produces a value
- expressions can be nested and complex
- statements in JS make up programs
- statements have side effects: display words, counts, changes environment or internal state of the machine it runs on
- statements in JS end with semicolons `;`
---
### Bindings
- JS has *binding* or *variables*
```JS
let caught = 5*5;
```
- special keyword *let*, indiciates the variable *caught* will hold the value "5*5"
- the binding name can be used as an expression
```JS
let ten = 10;
console.log(ten * ten);
// → 100
```
- the variable name 'ten' is used in another expression
- = operator used to change a variable value to different one
- value of an empty variable is *undefined*
- single `let` statement has multiple bindings
```JS
let one = 1, two = 2;
console.log(one + two);
// → 3
```
- both `var` and `const` are used to create bindings
```JS
var name = "Ayda";
const greeting = "Hello ";
console.log(greeting + name);
// → Hello Ayda
```
- const is *constant*, defines a constant variable which never changes its values. 
---
### Binding Names
- variable names can be anything other than special meaning words or *keywords*
- Some words are "reserved" for future versions of JS
---
### The Environment
- environment is the collection of bindings and their values that exist at a given time
- Bindings exist in an environment when a program starts ups
---
### Functions
- function is a piece of a program wrapped in a value
- executing a function -> *invoking, calling, applying it*
```JS
prompt("Enter passcode");
```
- value between parentheses is given to the program inside the function
- values given to functions are arguments
---
### Console.log Functions
- `console.log` outputs values
- JS systems provide `console.log` functions to write out arguments to some text output device. 
- Output lands in JS console, hidden from the interface
- Binding names can't contain period characters but console.log has one. Console.log isn't a binding but an expression that retreviews the `log` property from the value held by the console binding. 
---
### Return Values
- showing dialog box or writting text is a *side effect*
- functions are useful because of side effects
- functions also produce values, which they don't need a side-effect
- function `Math.max` takes any amount of number arguments and returns the greatest. 
```JS
console.log(Math.max(2, 4));
// → 4
```
- Anything that produces a value is an expression in JS. 
---
### Control Flow
- statements are executed from top to bottom
- conditional execution is when a program takes a different path/branch based on the condition/situation at hand
```JS
let theNumber = Number(prompt("Pick a number"));
if (!Number.isNaN(theNumber)) {
  console.log("Your number is the square root of " +
              theNumber * theNumber);
}
```
- the number is only printed if the input value is actually a number
- entering a string or anything else will not print
- braces are used to group any number of statements into a single statement called a *block*
- can also be one-liner:
```JS
if (1 + 1 == 2) console.log("It's true");
// → It's true
```
- code executes when condition holds true but also needs code that handles other case, when condition is false
- alternate path is created through `else` together with `if`. 
```JS
let theNumber = Number(prompt("Pick a number"));
if (!Number.isNaN(theNumber)) {
  console.log("Your number is the square root of " +
              theNumber * theNumber);
} else {
  console.log("Hey. Why didn't you give me a number?");
}
```
- if `theNumber` is a number, the function prints the main text otherwise it displays the second text. 
- you can chain multiple if/else pairs to have more than two paths:
```JS
let num = Number(prompt("Pick a number"));

if (num < 10) {
  console.log("Small");
} else if (num < 100) {
  console.log("Medium");
} else {
  console.log("Large");
}
```
- if the number is less than 10, the program prints small
- else if the number is less than 100, the program prints mediumn
- second statement only runs if the if statement before doesn't
- last statement runs if the two above it don't run
---
### While and Do Loops
- loop allows code to run multiple times
- looping allows program to go back to a certain point and repeat it with the current program state
```JS
let number = 0;
while (number <= 12) {
  console.log(number);
  number = number + 2;
}
// → 0
// → 2
//   … etcetera
```
- counts even numbers from 0 to 12
- do loop is similar to while loop. do loop always executes its body at least once and it starts testing whether it should stop only after the first execution
```JS
let yourName;
do {
  yourName = prompt("Who are you?");
} while (!yourName);
console.log(yourName);
```
- program will request the name until it receives a string
---
### For Loops
- counter binding created to track progress of a loop
- while loop has test expression that checks whether the counter has reached its end value
- counter is updated to track progress at the end of the loop body
```JS
for (let number = 0; number <= 12; number = number + 2) {
  console.log(number);
}
// → 0
// → 2
//   … etcetera
```
- prints even numbers from 0 to 12
- two semicolones in for loop parentheses -> the first part initializes the loop, the second part is the expression that checks if the loop continues, the final part updates the state of the loop after every iteration
---
### Breaking Out of Loops
- special statement called `break` which jumps out of a loop
```JS
for (let current = 20; ; current = current + 1) {
  if (current % 7 == 0) {
    console.log(current);
    break;
  }
}
// → 21
```
- breaks out of loop when current is equal to 21
- without break, the for loop would run forever bc there's no middle section to check when to stop the loop
- infinite loops never stop running
- `continue` is similar to `break` -> control jumps out of the loop body and continues with the loop's next iteration
---
### Updating Bindings Succinctly 
- when looping, a program updates a binding to hold a value based on the binding's previous value
- JS has a shortcut
```JS
counter = counter + 1
counter += 1;
```
- similar shortcuts for operators such as `result *= 2` to double result or `counter -= 1` to decriment counter
- also counter++ and counter-- 
---
### Dispatching on a Value with Switch
- if, else if, and else structures can be expressed through "switch"
```JS
switch (prompt("What is the weather like?")) {
  case "rainy":
    console.log("Remember to bring an umbrella.");
    break;
  case "sunny":
    console.log("Dress lightly.");
  case "cloudy":
    console.log("Go outside.");
    break;
  default:
    console.log("Unknown weather type!");
    break;
}
```
- requires break to exit
---
### Capitalization
- binding names can't have spaces, use _ instead
- standard JS functions capitalize every word except the first
---
### Comments
- single line comment with `//`
- block comments with `/* */`
