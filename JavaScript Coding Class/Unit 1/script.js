

// Single line comment
/*
Multiline Comment
*/


// Representation for a value
// Dynamically Dyped
// vs Statically Typed
//  - Java
//  - C
//Define a type when initializing a variable


// Data


// var
// Modern way
let text = "Hello World";

// Data Typess
// - String
// - Boolean (true or false)
// - Number (int or floats or doubles or decimals, etc.)

let x = 3
let y = 2
let z = 5

/* Math Operations can only be done with number types
 Addition, Subtraction, Multiplication, Division
 Modulus; %
 Gets the remainder of a division problem

15/2 = 7
15 % 2 = 1

18 % 5 = 3
remainder = 1

String concatenation (combining srtings)
Text

"1" + "2" // -> "12"
"Hello" + "world" // -> "Helloworld"

"1" + 2 // -> "12"
"1" + 2 + 3 // -> "15"

("1" + 2) + 3 // -> "123"

// Variable Scope
//         Where the variable exists in our program
console.log(text):
*/
//tool

let  hiddenvar; //Initialized hiddenvar
function func1() {                    //Code Block
    let hiddenvar = "asdfasdf"
    
    console.log(hiddenvar);
}

func1(); // Calling a function
console.log(hiddenvar);

//Conditionals
//If else Statemtns


//How we compare things
// === or ==
// > or <
// <= or >=
// !==
//3 types of conditionals:

let number;
let target;


if(number === target) {
    console.log("You guessed correctly!")
}
else if(number < target) {
    console.log("Your guess was too low!")
}
else {
    console.log("Your guess was too high!")
}

let number2 = 3

if(number2 > 0) {
    console.log("Wow")
} else if (number2 > 2) {
    console.log("Wow x2")
} else {
    console.log("unlucky")
}


//

let answer = prompt("Do you want to play a game?")

if(answer == "yes") {
alert("Fantastic, lets play!")
}  else {
    alert("Okay, maybe next time")
}



let a = 0
let b = false
let c = "";
console.log(a == b) // True
console.log(c == a) // True
console.log(c == b) // True

