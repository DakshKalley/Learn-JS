// JS Exercises From Chapter Four

/*
Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.
*/
function range(start, end){
    n = [];
    while (start <= end){
        n.push(start);
        start += 1;
    }
    return n;
}
//console.log(range(1, 10));

/*
Next, write a sum function that takes an array of numbers and returns the sum of these numbers. 
Run the example program and see whether it does indeed return 55.
*/
function sum(nums){
    total = 0;
    for (let element of nums){
        total += element;
    }
    return total;
}
//console.log(sum(range(1, 10)));

/*As a bonus assignment, modify your range function to take an optional third argument that indicates the “step” value used when building the array.
If no step is given, the elements go up by increments of one, corresponding to the old behavior.
The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. 
Make sure it also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].
*/
function range(start, end, step=1){
    n = [];
    if (step > 0){
        while (start <= end){
            n.push(start);
            start += step;
        }
    } else{
        while (start >= end){
            n.push(start);
            start += step;
        }
    }
    return n;
}
//console.log(range(1, 10, 2)); 
//console.log(range(5, 2, -1));

/*Arrays have a reverse method that changes the array by inverting the order in which its elements appear.
For this exercise, write two functions, reverseArray and reverseArrayInPlace.
The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order.
The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument by reversing its elements.
Neither may use the standard reverse method.
*/
function reverseArray(ar){
    n = [];
    for (let element of ar){
        n.unshift(element);
    }
    return n;
}
//console.log(reverseArray(["A", "B", "C"]));

function reverseArrayInPlace(av){
    for (i = 0; i < av.length; i++){
        av.push(av[0]);
        av.shift(av[0]);
    }
}
//let arrayValue = [1, 2, 3, 4, 5];
//reverseArrayInPlace(arrayValue);
//console.log(arrayValue);

//simple/cheat method using reverseArray function
function reverseArrayInPlace(av){
    for (let elem of reverseArray(av)){
        av.shift(elem);
        av.push(elem);
    }
}
//let arrayValue = [1, 2, 3, 4, 5];
//reverseArrayInPlace(arrayValue);
//console.log(arrayValue);

/*
Write a function arrayToList that builds up a list structure like the one shown when given [1, 2, 3] as argument.
*/
function arrayToList(ay){
    let list = null;
    for (i = ay.length-1; i >= 0; i--){
        list = {
            value: ay[i],
            rest: list
        }
    }
    return list;
}
//console.log(arrayToList([10, 20]));

/*
Also write a listToArray function that produces an array from a list. 
*/
function listToArray(list){
    let array = [];
    for (let node = list; node; node = node.rest){
        array.push(node.value);
    }
    return array;
}
//console.log(listToArray(arrayToList([10, 20, 30])));

/*
Then add a helper function prepend, which takes an element and a list and creates a new list that adds the element to the front of the input list, 
and nth, which takes a list and a number and returns the element at the given position in the list (with zero referring to the first element) 
or undefined when there is no such element.
*/
function prepend(element, list){
    list = {
        value: element,
        rest: list
    }    
    return list;
}
//console.log(prepend(10, prepend(20, null)));

function nth(list, number){
    if (!list){
        return undefined;
    }else if (number == 0){
        return list.value;
    }else{
        return nth(list.rest, number-1);
    }
}
//console.log(nth(arrayToList([10, 20, 30]), 1));

/*
Write a function deepEqual that takes two values and returns true only if they are the same value or are objects with the same properties, 
where the values of the properties are equal when compared with a recursive call to deepEqual.
*/
function deepEqual(a, b) {
    if (a === b){
        return true;
    }
    if (a == null || typeof a != "object" || b == null || typeof b != "object"){
        return false;
    }
    let keysA = Object.keys(a), keysB = Object.keys(b);
    if (keysA.length != keysB.length){
        return false;
    }
    for (let key of keysA) {
      if (!keysB.includes(key) || !deepEqual(a[key], b[key])){
        return false;
      }
    }
    return true;
  }
  
  let obj = {here: {is: "an"}, object: 2};
  console.log(deepEqual(obj, obj));
  // → true
  console.log(deepEqual(obj, {here: 1, object: 2}));
  // → false
  console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
  // → true

