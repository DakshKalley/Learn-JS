# JS Chapter Three ~ Functions
***
### Defining a Function
- function definition is regular binding
```JS
const square = function(x) {
  return x * x;
};3

console.log(square(12));
// → 144
```
- function square refers to a function that produces square of a given number
- use expression `function`
- functions have `parameters` and a *body* which contains statements to be executed
- some functions provide values while others have side effects 
- parameters are given by the *caller* of the function
---
### Binding and Scopes
- bindings have a *scope* -> part of the program in which the binding is visible
- global variables -> usable throughout the program
- bindings created for function parameters are only referenced from that function -> local variables
- bindings with `let` and `const` are local to the block they are declared in
---
### Nested Scope
- blocks and functions created inside other blocks and functions have multiple levels of locality
```JS
const hummus = function(factor) {
  const ingredient = function(amount, unit, name) {
    let ingredientAmount = amount * factor;
    if (ingredientAmount > 1) {
      unit += "s";
    }
    console.log(`${ingredientAmount} ${unit} ${name}`);
  };
  ingredient(1, "can", "chickpeas");
  ingredient(0.25, "cup", "tahini");
  ingredient(0.25, "cup", "lemon juice");
  ingredient(1, "clove", "garlic");
  ingredient(2, "tablespoon", "olive oil");
  ingredient(0.5, "teaspoon", "cumin");
};
```
- `factor` binding inside the `ingredient` function is visible in the outer function. 
---
### Functions as Values
- function value can do things like other values but can't be called
- function values can be stored in a new binding, passed as an argument, etc
- function binding holds a function like a regular binding and can be assigned a new value
---
### Declaration Notation
- shorter way to create functions
```JS
function square(x) {
  return x * x;
}
```
- function declaration defines the binding and points it at a given function
- function declarations are moved to the top of their scope and can be used by all the code
---
### Arrow Functions
- uses `=>` instead of the function keyword
```JS
const power = (base, exponent) => {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
};
```
- arrow is after parameters and follows the body
- no parameters results in empty parenthesis 
---
### Call Stack
```JS
function greet(who) {
  console.log("Hello " + who);
}
greet("Harry");
console.log("Bye");
```
- computer has to remember context of the call
- computer stores the context in a *call stack*
- when a function is called, the current context is stored on top of this *call stack*
- when a function returns, it removes the top context from the stack and uses that context to continue
- if the *call stack* grows too big, the computer will return a fail message
- infinite stack would also "blow the stack"
---
### Optional Arguments
```JS
function square(x) { return x * x; }
console.log(square(4, true, "hedgehog"));
// → 16
```
- extra parameters are ignored 
- computer only computes the first parameter
- too few parameters are assigned the value `undefined`
- allows functions to be called with different numbers of arguments
```JS
function minus(a, b) {
  if (b === undefined) return -a;
  else return a - b;
}

console.log(minus(10));
// → -10
console.log(minus(10, 5));
// → 5
```
- writing = after a parameter gives the value of that expression when an argument is not given
```JS
function power(base, exponent = 2) {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
}

console.log(power(4));
// → 16
console.log(power(2, 6));
// → 64
```
---
### Closure
- what happens to local bindings when the function call that created them is no longer active
```JS
function wrapValue(n) {
  let local = n;
  return () => local;
}

let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);
console.log(wrap1());
// → 1
console.log(wrap2());
// → 2
```
- code defines a function that creates a local binding and then returns a function that accesses and returns the local binding
- referencing a specific instance of a binding in an enclosing scope is called *closure*
---
### Recursion
- function calls itself
```JS
function power(base, exponent) {
  if (exponent == 0) {
    return 1;
  } else {
    return base * power(base, exponent - 1);
  }
}

console.log(power(2, 3));
// → 8
```
- calling functions often will overflow the *call stack*
- speed vs efficiency is important in considering recursion
---
### Growing Functions
- use generalization to simplify functions
```JS
function printFarmInventory(cows, chickens) {
  let cowString = String(cows);
  while (cowString.length < 3) {
    cowString = "0" + cowString;
  }
  console.log(`${cowString} Cows`);
  let chickenString = String(chickens);
  while (chickenString.length < 3) {
    chickenString = "0" + chickenString;
  }
  console.log(`${chickenString} Chickens`);
}
printFarmInventory(7, 11);
```
- above implementation can be simplified to
```JS
function printZeroPaddedWithLabel(number, label) {
  let numberString = String(number);
  while (numberString.length < 3) {
    numberString = "0" + numberString;
  }
  console.log(`${numberString} ${label}`);
}

function printFarmInventory(cows, chickens, pigs) {
  printZeroPaddedWithLabel(cows, "Cows");
  printZeroPaddedWithLabel(chickens, "Chickens");
  printZeroPaddedWithLabel(pigs, "Pigs");
}

printFarmInventory(7, 11, 3);
```
- the simplified function tries to accomplish three things into a single function
- simplify even further
```JS
function zeroPad(number, width) {
  let string = String(number);
  while (string.length < width) {
    string = "0" + string;
  }
  return string;
}

function printFarmInventory(cows, chickens, pigs) {
  console.log(`${zeroPad(cows, 3)} Cows`);
  console.log(`${zeroPad(chickens, 3)} Chickens`);
  console.log(`${zeroPad(pigs, 3)} Pigs`);
}

printFarmInventory(7, 16, 3);
```
- separating tasks the program performs into different functions is useful to organize and avoid repetition