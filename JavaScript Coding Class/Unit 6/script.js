let array = [13,37,96,51,73]

console.log(array[1])

array[1] = 63

console.log(array[1])


array.push(32)
array.pop(array);



array.slice(3,4);


//array.splice(position,how many to remove, what to add)


let text = "Hello my name is Joseph";
let words = text.split(" is "); //
let path = "./document/project/java/homework/unit1.html";
let dirs = path.split("/");

let filename = dirs.pop();
console.log(filename)
console.log(words);

let essay = "";

let AllWords = essay.split(" ");