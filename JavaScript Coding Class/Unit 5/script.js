let canvas = document.getElementById("draw-me")
let ctx = canvas.getContext("2d")
ctx.canvas.width = 640
ctx.canvas.height = 480

let input = new Set();
// Has (checking)
// put (adding)
// delete (removing)



let obj = {
    x: 100,
    y: 100,
    width: 10,
    height: 10
}
let speed = 5




function draw(rect) {
    ctx.fillStyle = "red"
    ctx.fillRect(rect.x, rect.y,rect.width, rect.height)
}

function clear() {
    ctx.clearRect(0,0,ctx.canvas.width, ctx.canvas.height);
}


function update() {
    handleInput()
    clear();
    draw(obj)   

}

setInterval(update,100)

function handleInput() {
    console.log(input);
    if (input.has("w")) {
        obj.y += speed
    }
    if (input.has("s")) {
        obj.y -= speed
    }
}



function addInput(event) {
    input.add(event.key)
}

function removeInput(event) {
    input.delete(event.key)
}





/*
Differnt types of events
"click"
"mousedown"
"mouseup"
*/
function setup() {
    window.addEventListener("keydown",addInput);
    window.addEventListener("keyup",removeInput)
}


//When the window loads, run the function setup

window.addEventListener("load",setup);
















