// Functions
// - 
// - Have seperate variables
// - Block code
// - 


function f(x) {
    return x + 3
}

console.log(f(3))



function greeting(name) {
    console.log("Hello, my name is "+ name)
}

console.log(greeting(Joseph));


for(let i = 0; i <10; i++) {
    // 1 - 100
    // 0 <= n < 1     // Math Operation
    // 0 <= n < 100     // 1 * x
    // 1 <= n <101  // x + 1
    console.log(Math.floor(Math.random() * 100) +1)
}


Math.floor(100); // Rounding numbers (down to lower value, always)
Math.ceil(); //Rounding numbers (up to higher value , always)
Math.random(); // 0 <= n < 1;


// 0 <= n < 1 +low
//low <= n < 1 + low

// 0 <= n < 1
// n is a whole number
function getRandomNumber(low,high) {
    return Math.floor((Math.random()) = high - low)+ low
}

for(let i = 0; i < 100; i++) {
    console.log(getrandomnumber(-10,10))
}