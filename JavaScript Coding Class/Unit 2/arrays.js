//Arrays
// - A list of stuff






let = i = 2
let stuff = [true, 0, "Hello", "wow", i];


//0-10 inclusive
//Arrays are acessed through indices
// 0 - array.length (inclusive, exclusive)

console.log(stuff[2])

let groceries = ["bread", "milk", "eggs","chips"];
console.log(groceries)

groceries.push("fruits"); 
console.log(groceries)

groceries.pop(groceries);
console.log(groceries);

groceries.splice(1,1) //if you do 1,2 it will delete milk and eggs
console.log(groceries);

console.log(groceries.length)
//Push
//Pop
//Splice
//Clear


let twoD = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

console.log((twoD[1][0]))
console.log((twoD[2][1]))