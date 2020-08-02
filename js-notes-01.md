# JS Chapter One
***
### What is JS?
- JS created in 1995
- used in web applications 
- flexible language
---
### Values
- Chunks of data are called *values*
- values have types that determine their roles
- values are stored somewhere
---
### Numbers
- whole numbers 1, 2, 3, 4...
- fractional numbers written with dot 9.81
- exponents 2.998e8 = 2.998 x 10^8
---
### Arithmetic
- operations in JS include +, /, *, -
- follows pemdas
---
### Special Numbers
- infinity and -infinity 
- NaN is "not a number"
---
### Strings
- used to represent text through quotes
- single quotes, double quotes, or backticks
- Newlines are only included when teh string is quoted with backticks
- backslash in quoted text has special character meaning
- characters such as emojis take up two "character positions"
- concatenating strings: `"con" + "cat" + "e" + "nate" = "concatenate"`
- template literals ${} -> result is computed and converted to string. Ex: `half of 100 is ${100 / 2}`
---
### Unary Operators
- some operators are words
- `typeof` operator produces string value naming the type of the value you give it. 
- Ex: `console.log(typeof 4.5)` returns number
- Ex: `console.log(typeof "x")` returns string

- **Console.log is used to see the result of evaluating something.**

- operators that take one value are *unary* operators
- operators that take two values are *binary* operators
---
### Boolean Values
- on/off or yes/no or true/false
- switch operators
- `console.log(3 > 2)` returns `true`
- `console.log(2 > 3)` returns `false`
- strings can also be compared
- `console.log("Aardvark" < "Zoroaster")` returns `true`
- Uppercase letters are "less" than lowercase letters
- JS compares each character left to right
- '>=' greater than or equal to. '<=' less than or equal to. '==' equal to. '!=' not equal to
```JS
console.log("Itchy" != "Scratchy")
// → true
console.log("Apple" == "Orange")
// → false
```
- In JS, NaN is not equal to itself
---
### Logical Operators
- logical operators are *'and'*, *'or'*, and *'not'*
- && is logical 'and'. Binary operator and returns true if both values given are true. 
```JS
console.log(true && false)
// → false
console.log(true && true)
// → true
```
- || is logical 'or'. Produces true if either of the values given are true. 
```JS
console.log(false || true)
// → true
console.log(false || false)
// → false
```
- ! is 'not'. Flips the value given so !true returns false and !false returns true. 
- terenary operator is written with question mark and colon:
- '?' conditional operator -> value on the left of the question mark picks which of the other two values will come out. 
- If true, it chooses the middle value.
- If false, it chooes the right value. 
```JS
console.log(true ? 1 : 2);
// → 1
console.log(false ? 1 : 2);
// → 2
```
---
### Empty Values
- null and undefined are special values
- represent absence of a meaningful value
- these two values are interchangeable
---
### Automatic Type Conversion
- JS accepts programs and is flexible
```JS
console.log(8 * null)
// → 0
console.log("5" - 1)
// → 4
console.log("5" + 1)
// → 51
console.log("five" * 2)
// → NaN
console.log(false == 0)
// → true
```
- Operator is applied to the "wrong" type of value, JS will try and convert the value to the type it needs -> called *type coercion*. 
- Null in first expression becomes 0 and "5" in the second expression becomes 5. 
- In the third expression, + tries to concatenate the string so 1 is converted to a string "1".
- Comparing values of the same type using ==, the outcome is true when both values are the same. 
- However, null or undefined on either side of the operator require both sides are one of null/undefined to return true. 
```JS
console.log(null == undefined);
// → true
console.log(null == 0);
// → false
```
- to avoid type conversions, there are special operators such as "===" or "!==". 
---
### Short-Circuiting of Logical Operators
- || operator will return value on left if it is converted to true or value on right otherwise:
```JS
console.log(null || "user")
// → user
console.log("Agnes" || "user")
// → Agnes
```
- For &&, if the value on the left is false it returns the left value otherwise it returns the value on the right.
- Other parts are only evaluated when necessary:
- Ex: `true || x` will only evaluate true and ignore x. 