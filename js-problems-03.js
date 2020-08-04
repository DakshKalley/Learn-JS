// JS Exercises From Chapter Three

/* Write a function min that takes two arguments and returns their minimum. */

const min = (num1, num2) => {
    if (num1 > num2){
        return num2;
    } else{
        return num1;
    }
};

/* Here’s another way to define whether a positive whole number is even or odd:

Zero is even.

One is odd.

For any other number N, its evenness is the same as N - 2.

Define a recursive function isEven corresponding to this description. The function should accept a single parameter (a positive, whole number) and return a Boolean.

Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this? */

const isEven = (num) => {
    if (num < 0){
        num = (num*-1);
    } if (num == 0){
        return true;
    } else if (num == 1){
        return false;
    } else{
        return isEven(num - 2);
    }
};

/*
You can get the Nth character, or letter, from a string by writing "string"[N]. 
The returned value will be a string containing only one character (for example, "b"). 
The first character has position 0, which causes the last one to be found at position string.length - 1. 
In other words, a two-character string has length 2, and its characters have positions 0 and 1.

Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase “B” characters there are in the string.
*/

const countBs = (phrase) => {
    let counter = 0;
    for (let i = 0; i < phrase.length; i++){
        if (phrase[i] == "B"){
            counter++;
        }
    }
    return counter;
};

/*
Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase “B” characters). 
Rewrite countBs to make use of this new function.
*/

const countChar = (phrase, char) => {
    let counter = 0;
    for (let i = 0; i < phrase.length; i++){
        if (phrase[i] == char){
            counter++;
        }
    }
    return counter;
};