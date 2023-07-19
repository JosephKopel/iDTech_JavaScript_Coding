// Different ways to store data
//Trees, graphs, arrays, hashes, variables, etc.

//Java script tutor visiualizes data on in an interface


//Stack is data structure similar to tower of hanoi
//Image ineach layer as a n object with some value
//What is the order in which we take values of a stack?
//IN order to access, #4, you must firts go through 1, 2, 3
//Can only access items in a specific order

stackoverflow //Accesed to much memory in the stack

let stack = [];
//Only access stack using push and pop

stack.push("Andrew");
stack.push("Alex");
stack.push("Joseph");
stack.push("Jonathan");

let x = stack.pop();

console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())

let undo = [];
let redo = [];

/*Add 
Flour
Sugar
Salt
Eggs */
//Undo egg
//undo salt
//Undo sugar
//Redo sugar

undo.push("Flour")
undo.push("Sugar")
undo.push("Salt")
undo.push("Eggs")
//Flour, sugar, salt, eggs
redo.push(undo.pop())
//Undo: Flour, sugar, salt
//Redo : Eggs
redo.push(undo.pop())
//Undo: Flour, sugar
//Redo: Eggs, salt
redo.push(undo.pop())
//Undo: Flour
//Redo: Eggs, salt, sugar
undo.push(redo.pop())
//Undo: Flour, Sugar
//Redo: Eggs, salt


