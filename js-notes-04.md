# JS Chapter Four ~ Data Structures: Objects and Arrays
***
### Data Sets
- array -> written as a list of values between square brackets
```JS
let listOfNumbers = [2, 3, 5, 7, 11];
console.log(listOfNumbers[2]);
// → 5
console.log(listOfNumbers[0]);
// → 2
console.log(listOfNumbers[2 - 1]);
// → 3
```
---
### Properties
- `string.length` and `Math.max` are expressions to access property of a value
- almost all JS values have properties, except null and undefined
- dot and square brackets are used to access properties
-  `value.x` and `value[x]` access property on value, but not the same property
- value.x fetches property of value called "x"
- value[x] tries to evaluate the expression x and uses the result
---
### Methods
- string and array values have additional properties that hold function values such as .toUpperCase()
- properties that contain functions are called methods of the value they belong to
```JS
let sequence = [1, 2, 3];
sequence.push(4);
sequence.push(5);
console.log(sequence);
// → [1, 2, 3, 4, 5]
console.log(sequence.pop());
// → 5
console.log(sequence);
// → [1, 2, 3, 4]
```
- push method adds values to an array
- pop method removes the last value and returns it
- *a stack* -> data structure that allows you to push values into it and pop them out again in the opposite order so that the thing that was added last is removed first
---
### Objects
- Objects are collections of properties
```JS
let day1 = {
  squirrel: false,
  events: ["work", "touched tree", "pizza", "running"]
};
console.log(day1.squirrel);
// → false
console.log(day1.wolf);
// → undefined
day1.wolf = false;
console.log(day1.wolf);
// → false
```
- braces include properties separated by commas
- each property has a name: value
- properties whose names aren't valid binding names or valid numbers have to be quoted
```JS
let descriptions = {
  work: "Went to work",
  "touched tree": "Touched a tree"
};
```
- braces either start a block of statements or they describe an object
- property bindings grasp values while other bindings and properties might hold onto the same value
- delete operator removes the named property from the object
```JS
let anObject = {left: 1, right: 2};
console.log(anObject.left);
// → 1
delete anObject.left;
console.log(anObject.left);
// → undefined
console.log("left" in anObject);
// → false
console.log("right" in anObject);
// → true
```
- binary *in* operator tells you wheter that object has a property with that name
- setting property undefined will allow the object to keep the property but have an unassigned value
- to find properties an object has: `Object.keys` function
```JS
console.log(Object.keys({x: 0, y: 0, z: 2}));
// → ["x", "y", "z"]
```
- `Object.assign` function copies all properties from one object to another
```JS
let objectA = {a: 1, b: 2};
Object.assign(objectA, {b: 3, c: 4});
console.log(objectA);
// → {a: 1, b: 3, c: 4}
```
- transferred properties to objectA
- arrays are a kind of object specialized for storing sequences of things
- values such as numbers, strings, booleans are *immutable* -> it is impossible to change values of those types
- you can change properties of objects
```JS
let object1 = {value: 10};
let object2 = object1;
let object3 = {value: 10};

console.log(object1 == object2);
// → true
console.log(object1 == object3);
// → false

object1.value = 15;
console.log(object2.value);
// → 15
console.log(object3.value);
// → 10
```
- object1 and object2 bindings grasp the same object so they have the same *identity*
- binding of object3 points to a different object which has the same properties as object1. 
- use let binding to keep track of a changing number by changing the value the binding points at
```JS
const score = {visitors: 0, home: 0};
// This is okay
score.visitors = 1;
// This isn't allowed
// score = {visitors: 1, home: 1};
```
- arrays have include method that checks whether a given value exists in the array
---
### Array Loops
```JS
for (let i = 0; i < JOURNAL.length; i++) {
  let entry = JOURNAL[i];
  // Do something with entry
}
```
- journal is an array -> loop goes over arrays one element at a time
- simpler way to write above loop
```JS
for (let entry of JOURNAL) {
  console.log(`${entry.events.length} events.`);
}
```
- loops over elements of the value given after `of`
- works for strings and other data structures
---
### Arrayology
- push and pop to add/remove elements at the end of an array
- unshift and shift to add/remove elements at the start of an array
```JS
let todoList = [];
function remember(task) {
  todoList.push(task);
}
function getTask() {
  return todoList.shift();
}
function rememberUrgently(task) {
  todoList.unshift(task);
}
```
- `indexOf` method provides specifc value
- finds index of the requested value 
```JS
console.log([1, 2, 3, 2, 1].indexOf(2));
// → 1
console.log([1, 2, 3, 2, 1].lastIndexOf(2));
// → 3
```
- `slice` takes the start and end indices and returns an array with only elements between them
```JS
console.log([0, 1, 2, 3, 4].slice(2, 4));
// → [2, 3]
console.log([0, 1, 2, 3, 4].slice(2));
// → [2, 3, 4]
```
- start index is inclusive and end index is exclusive
- `concat` method glues arrays together to create new arrays
```JS
function remove(array, index) {
  return array.slice(0, index).concat(array.slice(index + 1));
}
console.log(remove(["a", "b", "c", "d", "e"], 2));
// → ["a", "b", "d", "e"]
```
---
### Strings and their Properties
- *length* and *toUpperCase* properties of string values
- can't add new properties
```JS
let kim = "Kim";
kim.age = 88;
console.log(kim.age);
// → undefined
```
- types have built-in properties such as slice/indexOf
```JS
console.log("coconuts".slice(4, 7));
// → nut
console.log("coconut".indexOf("u"));
// → 5
```
- string's indexOf can search for a string containing more than one character
```JS
console.log("one two three".indexOf("ee"));
// → 11
```
- `trim` method removes whitespace
```JS
console.log("  okay \n ".trim());
// → okay
```
- `zeroPad` function -> takes the desired length and padding character as an argument
```JS
console.log(String(6).padStart(3, "0"));
// → 006
```
- `split` -> splits a string
- `join` -> joins a string
```JS
let sentence = "Secretarybirds specialize in stomping";
let words = sentence.split(" ");
console.log(words);
// → ["Secretarybirds", "specialize", "in", "stomping"]
console.log(words.join(". "));
// → Secretarybirds. specialize. in. stomping
```
- repeat a strin with the `repeat` method
```JS
console.log("LA".repeat(3));
// → LALALA
```
---
### Rest Parameters
- to make a function accept any number of arguments -> use three dots before the function's last parameter
```JS
function max(...numbers) {
  let result = -Infinity;
  for (let number of numbers) {
    if (number > result) result = number;
  }
  return result;
}
console.log(max(4, 1, 9, -2));
// → 9
```
- *rest parameter* is bound to an array containing the arguments
- also use three-dot notation to call a function with an array of arguments
```JS
let numbers = [5, 1, 7];
console.log(max(...numbers));
// → 7
```
---
### Math Object
- math object contains cos, sin, tan, inverse func, and PI
```JS
function randomPointOnCircle(radius) {
  let angle = Math.random() * 2 * Math.PI;
  return {x: radius * Math.cos(angle),
          y: radius * Math.sin(angle)};
}
console.log(randomPointOnCircle(2));
// → {x: 0.3667, y: 1.966}
```
- `Math.random` returns a new random number between zero and one
```JS
console.log(Math.random());
// → 0.36993729369714856
console.log(Math.random());
// → 0.727367032552138
console.log(Math.random());
// → 0.40180766698904335
```
- `Math.floor` rounds down to nearest whole number
```JS
console.log(Math.floor(Math.random() * 10));
// → 2
```
- `Math.ceil` rounds up to a while number
---
### JSON
- objects and arrays are stored in the coputer's memory as sequences of bits holding the *addresses* of their contents
- an array with another array inside of it consists of one memory region for the inner array and another for the outer array, containing a binary number that represents the position of the inner array
- to save the data, serialize the data
- convert data into a flat description and popular serialization format called JSON -> JavaScript Object Notation
- all property names in JSON have to be surrounded by double quotes and only simple data expressions are allowed
```JSON
{
  "squirrel": false,
  "events": ["work", "touched tree", "pizza", "running"]
}
```
- functions `JSON.stringify` and `JSON.parse` to convert data to and from this format
```JS
let string = JSON.stringify({squirrel: false,
                             events: ["weekend"]});
console.log(string);
// → {"squirrel":false,"events":["weekend"]}
console.log(JSON.parse(string).events);
// → ["weekend"]
```

