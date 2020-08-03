// JS Exercises From Chapter Two

/*
Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######
*/

let step = "#";
for (let counter = 1; counter <= 7; counter++){
    console.log(step);
    step += "#";
}

/* 
Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions.
For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.
*/

for (let count = 1; count <= 100; count++){
    if (count%3 == 0){
        console.log("Fizz");
    } else if (count%5 == 0){
        console.log("Buzz");
    } else{
        console.log(count);
    }
}

/*
When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 
(and still print "Fizz" or "Buzz" for numbers divisible by only one of those).
*/

for (let count = 1; count <= 100; count++){
    if (count%3 == 0 && count%5 == 0){
        console.log("FizzBuzz");
    } else if (count%3 == 0){
        console.log("Fizz");
    } else if (count%5 == 0){
        console.log("Buzz");
    } else{
        console.log(count);
    }
}

/*
Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. 
At each position of the grid there is either a space or a "#" character. 
The characters should form a chessboard.
Passing this string to console.log should show something like this:

 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # #

When you have a program that generates this pattern, define a binding size = 8 and change the program so that it works for any size,
outputting a grid of the given width and height.
*/

let size = 8;
let gap = " ";
let hash = "#";
let board = "";
for (let position = 1; position <= (size*size); position++){
    if (position%2 == 0){
        board += hash;
    } else{
        board += gap;
    }
    if (position%size == 0){
        board += "\n"
        temp = hash;
        hash = gap;
        gap = temp;
    }
}
console.log(board);